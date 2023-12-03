package pg

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"github.com/Xrefullx/military/internal/models"
	_ "github.com/lib/pq"
)

type PgStorage struct {
	connect *sql.DB
}

func New(uri string) (*PgStorage, error) {
	connect, err := sql.Open("postgres", uri)
	if err != nil {
		return nil, err
	}
	return &PgStorage{connect: connect}, nil
}

func (PS *PgStorage) Ping() error {
	if err := PS.connect.Ping(); err != nil {
		return err
	}
	err := createTables(PS.connect)
	if err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) Close() error {
	if err := PS.connect.Close(); err != nil {
		return err
	}
	return nil
}

func createTables(connect *sql.DB) error {
	_, err := connect.Exec(`
	CREATE TABLE IF NOT EXISTS public.users
	(
		idmum integer NOT NULL,
		login text COLLATE pg_catalog."default",
		password text COLLATE pg_catalog."default",
		s_name1 text COLLATE pg_catalog."default",
		s_name2 text COLLATE pg_catalog."default",
		s_name3 text COLLATE pg_catalog."default",
		f_admin integer,
		CONSTRAINT users_pkey PRIMARY KEY (idmum)
	)
	
	TABLESPACE pg_default;
	
	ALTER TABLE IF EXISTS public.users
		OWNER to postgres;  
	`)
	if err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) Authentication(ctx context.Context, user models.AddUsers) (int, int, error) {
	var done int
	var isAdmin int
	err := PS.connect.QueryRowContext(ctx, `select count(1), coalesce(f_admin,0) from public.users where login=$1 and password=$2 group by f_admin`,
		user.Login, user.Password).Scan(&done, &isAdmin)
	if err != nil && !errors.Is(err, sql.ErrNoRows) {
		return 0, 0, err
	}
	if done == 0 {
		return 0, 0, nil
	}
	return done, isAdmin, nil
}

func (PS *PgStorage) AddUser(ctx context.Context, user models.AddUsers) error {
	_, err := PS.connect.ExecContext(ctx, `INSERT INTO public.users(
	login, password, s_name1, s_name2, s_name3, f_admin)
	VALUES ($1, $2, $3, $4, $5, $6)`, user.Login, user.Password, user.S_name1, user.S_name2, user.S_name3, user.F_admin)
	if err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) AddWork(ctx context.Context, work models.AddWork) error {
	_, err := PS.connect.ExecContext(ctx, `INSERT INTO public.work(
	s_name, s_fio,contestid)
	VALUES ($1, $2, $3)`, work.S_name, work.S_fio, work.ContestId)
	if err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) AddContest(ctx context.Context, contest models.AddContest) error {
	_, err := PS.connect.ExecContext(ctx, `INSERT INTO public.contest(
		s_name, startDate, endDate)
		VALUES ($1, $2, $3)`, contest.S_name, contest.StartDate, contest.EndDate)
	if err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) GetAllUsers(ctx context.Context) ([]models.AddUsers, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT idnum, COALESCE(login,'') login, COALESCE(password,''), COALESCE(s_name1,'') s_name1,
COALESCE(s_name2,'') s_name2, COALESCE(s_name3,'') s_name3, COALESCE(f_admin,0)
	FROM public.users;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.AddUsers
	for rows.Next() {
		var users models.AddUsers
		err := rows.Scan(&users.Idnum, &users.Login, &users.Password, &users.S_name1,
			&users.S_name2, &users.S_name3, &users.F_admin)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.AddUsers{}
	}

	return userses, nil
}

func (PS *PgStorage) GetAllUsersVotes(ctx context.Context) ([]models.AddUsers, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT idnum,
		COALESCE(CONCAT(s_name1, ' ', s_name2, ' ', s_name3), '') as s_fio
		FROM public.users WHERE f_admin = 0;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var userses []models.AddUsers
	for rows.Next() {
		var users models.AddUsers
		err := rows.Scan(&users.Idnum, &users.S_fio)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.AddUsers{}
	}

	return userses, nil
}

func (PS *PgStorage) DeleteUsers(ctx context.Context, UsersId int64) error {
	_, err := PS.connect.ExecContext(ctx, `DELETE FROM public.users WHERE idnum = $1;`, UsersId)
	return err
}

func (PS *PgStorage) DeleteContest(ctx context.Context, ContestId int64) error {
	_, err := PS.connect.ExecContext(ctx, `DELETE FROM public.contest WHERE idnum = $1;`, ContestId)
	return err
}

func (PS *PgStorage) DeleteWork(ctx context.Context, WorkId int64) error {
	_, err := PS.connect.ExecContext(ctx, `DELETE FROM public.work WHERE idnum = $1;`, WorkId)
	return err
}

func (PS *PgStorage) GetAllWork(ctx context.Context, login string) ([]models.AddWork, error) {
	query := `
SELECT w.idnum, w.s_name
	FROM public.work w
	join public.contest c on w.contestid = c.idnum
	where c.status = 1;
	`
	rows, err := PS.connect.QueryContext(ctx, query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var works []models.AddWork
	for rows.Next() {
		var work models.AddWork
		err := rows.Scan(&work.Idnum, &work.S_name)
		if err != nil {
			return nil, err
		}
		works = append(works, work)
	}
	// Если срез пустой, вернуть пустой срез вместо nil
	if len(works) == 0 {
		works = []models.AddWork{}
	}

	return works, nil
}

func (PS *PgStorage) GetAllContest(ctx context.Context) ([]models.Contest, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT COALESCE(c.idnum, 0), COALESCE(c.s_name, '') as contest,
       COALESCE(startdate,'1900-01-01') as startdate, COALESCE(enddate,'1900-01-01') as enddate, COALESCE(c.status, 0) status
	FROM public.contest c;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var field []models.Contest
	for rows.Next() {
		var contest models.Contest
		err := rows.Scan(&contest.Idnum, &contest.Contest, &contest.StartDate, &contest.EndDate, &contest.Status)
		if err != nil {
			return nil, err
		}
		field = append(field, contest)
	}

	if len(field) == 0 {
		field = []models.Contest{}
	}

	return field, nil
}

func (PS *PgStorage) GetRecentId(ctx context.Context, RecentId int64) ([]models.Fields, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT  public.work.s_name, s_fio ,f_relevance, 
		f_novelty, f_practice, f_dokvo, 
		f_quality, sum_field,
    COALESCE(CONCAT(s_name1, ' ', s_name2, ' ', s_name3), '') as s_fio2
	FROM public.fields
	join public.work on f_work = public.work.idnum
	join public.contest on public.work.contestid = public.contest.idnum
	join public.users on public.fields.f_users = public.users.idnum
	where status = 1 and f_users = $1
;`, RecentId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var field []models.Fields
	for rows.Next() {
		var fields models.Fields
		err := rows.Scan(&fields.S_name, &fields.S_FIO, &fields.F_relevance, &fields.F_novelty,
			&fields.F_practice, &fields.F_dokvo, &fields.F_quality, &fields.Sum_field, &fields.S_fio2)
		if err != nil {
			return nil, err
		}
		field = append(field, fields)
	}

	if len(field) == 0 {
		field = []models.Fields{}
	}

	return field, nil
}

func (PS *PgStorage) GetAllRecent(ctx context.Context) ([]models.Fields, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT w.s_name,
       w.s_fio AS s_fio,
       SUM(f_relevance) AS total_relevance,
       SUM(f_novelty) AS total_novelty,
       SUM(f_practice) AS total_practice,
       SUM(f_dokvo) AS total_dokvo,
       SUM(f_quality) AS total_quality,
       SUM(sum_field) AS total_sum_field,
       COUNT(DISTINCT f_users) AS total_voters
FROM public.fields f
left JOIN public.work w ON f_work = w.idnum
JOIN public.users ON f.f_users = public.users.idnum
join public.contest c on w.contestid = c.idnum
where c.status = 1
GROUP BY w.s_name,w.s_fio;
`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var field []models.Fields
	for rows.Next() {
		var fields models.Fields
		err := rows.Scan(&fields.S_name, &fields.S_FIO, &fields.F_relevance, &fields.F_novelty,
			&fields.F_practice, &fields.F_dokvo, &fields.F_quality, &fields.Sum_field, &fields.Total_voters) // Add &fields.Total_voters here
		if err != nil {
			return nil, err
		}
		field = append(field, fields)
	}

	if len(field) == 0 {
		field = []models.Fields{}
	}

	return field, nil
}

func (PS *PgStorage) GetAllWorkGet(ctx context.Context) ([]models.AddWork, error) {
	rows, err := PS.connect.QueryContext(ctx, `select COALESCE(w.idnum,0)idnum ,
       COALESCE(w.s_name, '') s_name ,COALESCE(w.s_fio, '') s_fio,COALESCE(c.s_name, '') contest   
	from public.work w
	join public.contest c on w.contestid = c.idnum
	where c.status = 1
;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.AddWork
	for rows.Next() {
		var users models.AddWork
		err := rows.Scan(&users.Idnum, &users.S_name, &users.S_fio, &users.Contest)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.AddWork{}
	}

	return userses, nil
}

func (PS *PgStorage) GetAllWorkGetPartipition(ctx context.Context) ([]models.AddWork, error) {
	rows, err := PS.connect.QueryContext(ctx, `select COALESCE(w.idnum,0)idnum ,
       COALESCE(w.s_name, '') s_name ,COALESCE(w.s_fio, '') s_fio,COALESCE(c.s_name, '') contest   
	from public.work w
	join public.contest c on w.contestid = c.idnum
	where c.status = 1
;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.AddWork
	for rows.Next() {
		var users models.AddWork
		err := rows.Scan(&users.Idnum, &users.S_name, &users.S_fio, &users.Contest)
		if err != nil {
			return nil, err
		}
		users.S_name = fmt.Sprintf("Работа: %s. ФИО: %s", users.S_name, users.S_fio)
		userses = append(userses, users)
	}
	if len(userses) == 0 {
		userses = []models.AddWork{}
	}
	return userses, nil
}

func (PS *PgStorage) AddRecent(ctx context.Context, fields models.Fields) error {
	// Получение значения f_users на основе логина пользователя
	var fUsers int
	err := PS.connect.QueryRowContext(ctx, `SELECT idnum FROM public.users WHERE login = $1`, fields.Login).Scan(&fUsers)
	if err != nil {
		return err
	}
	// Проверка, проголосовал ли пользователь уже за данную работу
	var count int
	err = PS.connect.QueryRowContext(ctx, `SELECT COUNT(*) FROM public.fields WHERE f_users = $1 AND f_work = $2`, fUsers, fields.F_work).Scan(&count)
	if err != nil {
		return err
	}
	if count > 0 {

		return errors.New("User has already voted for this work")
	}
	// Продолжайте выполнение вставки данных
	_, err = PS.connect.ExecContext(ctx, `INSERT INTO public.fields(f_users, f_work, f_relevance, f_novelty, f_practice, f_dokvo, f_quality)
		VALUES ($1, $2, $3, $4, $5, $6, $7)`,
		fUsers, fields.F_work, fields.F_relevance, fields.F_novelty, fields.F_practice, fields.F_dokvo, fields.F_quality)
	if err != nil {
		return err
	}

	return nil
}

func (PS *PgStorage) UpdateUsers(ctx context.Context, taskID int64, updateData map[string]interface{}) error {
	// Проверяем наличие ключа "f_admin" в updateData
	fAdminValue, ok := updateData["f_admin"]
	if !ok {
		// Если ключа "f_admin" нет в updateData, устанавливаем значение 0
		fAdminValue = 0
	}

	_, err := PS.connect.ExecContext(ctx, `
		UPDATE public.users
		SET login=$1, password=$2, s_name1=$3, s_name2=$4, s_name3=$5, f_admin=$6
		WHERE idnum=$7;`,
		updateData["login"], updateData["password"], updateData["s_name1"], updateData["s_name2"], updateData["s_name3"], fAdminValue, taskID)
	return err
}

func (PS *PgStorage) UpdateStatus(ctx context.Context, taskID int64, updateData map[string]interface{}) error {
	_, err := PS.connect.ExecContext(ctx, `UPDATE public.contest
		SET status = CASE
			WHEN idnum = $1 THEN 1
			ELSE 0
		END;`, taskID)
	return err
}

func (PS *PgStorage) GetFIO(ctx context.Context, login string) ([]models.AddUsers, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT 
    COALESCE(s_name1, '') || ' ' || COALESCE(s_name2, '') || ' ' || COALESCE(s_name3, '') AS "s_fio"
	FROM public.users where login=$1 ;`, login)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var field []models.AddUsers
	for rows.Next() {
		var s_fio string
		if err := rows.Scan(&s_fio); err != nil {
			return nil, err
		}
		addUser := models.AddUsers{
			S_fio: s_fio,
		}
		field = append(field, addUser)
	}
	if len(field) == 0 {
		field = []models.AddUsers{}
	}
	return field, nil
}

func (PS *PgStorage) GetFI(ctx context.Context, login string) ([]models.AddUsers, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT 
    COALESCE(s_name2, '') || ' ' || COALESCE(s_name3, '') AS "s_fio"
	FROM public.users where login=$1 ;`, login)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var field []models.AddUsers
	for rows.Next() {
		var s_fio string
		if err := rows.Scan(&s_fio); err != nil {
			return nil, err
		}
		addUser := models.AddUsers{
			S_fio: s_fio,
		}
		field = append(field, addUser)
	}
	if len(field) == 0 {
		field = []models.AddUsers{}
	}
	return field, nil
}
