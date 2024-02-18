package pg

import (
	"context"
	"database/sql"
	"encoding/json"
	"errors"
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
	return nil
}

func (PS *PgStorage) Close() error {
	if err := PS.connect.Close(); err != nil {
		return err
	}
	return nil
}

func (PS *PgStorage) Authentication(ctx context.Context, user models.Users) (int, int, error) {
	var done int
	var isAdmin int
	err := PS.connect.QueryRowContext(ctx, `select count(1), coalesce(is_admin,0) from public.users where login=$1 and password=$2 group by is_admin`,
		user.Login, user.Password).Scan(&done, &isAdmin)
	if err != nil && !errors.Is(err, sql.ErrNoRows) {
		return 0, 0, err
	}
	if done == 0 {
		return 0, 0, nil
	}
	return done, isAdmin, nil
}

func (PS *PgStorage) GetAllUsers(ctx context.Context) ([]models.Users, error) {
	rows, err := PS.connect.QueryContext(ctx, `SELECT idnum, COALESCE(login,'') login, COALESCE(password,'') password, COALESCE(s_fio,'') s_fio,
	COALESCE(s_text,'') s_text, COALESCE(is_admin,0)
		FROM public.users;`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.Users
	for rows.Next() {
		var users models.Users
		err := rows.Scan(&users.Idnum, &users.Login, &users.Password, &users.S_fio,
			&users.S_text, &users.Is_admin)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.Users{}
	}

	return userses, nil
}

func (PS *PgStorage) AddTask(ctx context.Context, task models.AddTask) (int64, error) {
	tx, err := PS.connect.BeginTx(ctx, nil)
	if err != nil {
		return 0, err
	}
	defer func() {
		if err != nil {
			err := tx.Rollback()
			if err != nil {
				return
			}
			return
		}
		err = tx.Commit()
	}()

	var id_answer int64
	err = tx.QueryRowContext(ctx, `
		INSERT INTO public."usersAnswer"(f_users, d_create)  
		VALUES ($1, now()) RETURNING id_answer
	`, task.UserIdnum, task.Login).Scan(&id_answer)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public."textFromServer"(obstanovka, s_date, f_users, f_users_answer) 
		VALUES ($1, $2, $3, $4)`,
		task.FormData.ObstanovkaInput, task.FormData.MonthInput, task.UserIdnum, id_answer)
	if err != nil {
		return 0, err
	}

	jsonData, err := json.Marshal(task.TableData9)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
	INSERT INTO public.table1(chief, "deputyChief", "deputyChiefUNR", "deputyChiefArmament", "deputyChiefRear", "deputyChiefVPR", f_users, "Id_users_answer")
	SELECT t.chief, t."deputyChief", t."deputyChiefUNR", t."deputyChiefArmament", t."deputyChiefRear", t."deputyChiefVPR", $1, $2
	FROM jsonb_populate_recordset(NULL::public.table1, $3::jsonb) AS t
	`, task.UserIdnum, id_answer, jsonData)
	if err != nil {
		return 0, err
	}

	jsonData2, err := json.Marshal(task.TableData10)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table4("TheFieldOfActivity", "datesLocation", "positionTitle", "kolVoLS", f_users, f_users_answer)
    SELECT t."TheFieldOfActivity", t."datesLocation", t."positionTitle", t."kolVoLS", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table4, $3::jsonb) AS t
`, task.UserIdnum, id_answer, jsonData2)
	if err != nil {
		return 0, err
	}

	return id_answer, nil
}

func (PS *PgStorage) GetTable1(ctx context.Context, login string) ([]models.TableData9, error) {
	var idnum int64
	err := PS.connect.QueryRowContext(ctx, `SELECT idnum FROM public.users WHERE login = $1;`, login).Scan(&idnum)
	if err != nil {
		return nil, err
	}

	var idnumAnswer int64
	err = PS.connect.QueryRowContext(ctx, `SELECT id_answer FROM public."usersAnswer" WHERE f_users = $1 order by d_create desc limit 1;`, idnum).Scan(&idnumAnswer)
	if err != nil {
		return nil, err
	}

	rows, err := PS.connect.QueryContext(ctx, `SELECT 
    COALESCE(idnum, 0) as idnum, 
    COALESCE(chief, '') as chief, 
    COALESCE("deputyChief", '') as "deputyChief", 
    COALESCE("deputyChiefUNR", '') as "deputyChiefUNR", 
    COALESCE("deputyChiefArmament", '') as "deputyChiefArmament", 
    COALESCE("deputyChiefRear", '') as "deputyChiefRear", 
    COALESCE("deputyChiefVPR", '') as "deputyChiefVPR"
FROM public.table1
where f_users =$1 and "Id_users_answer" = $2;`, idnum, idnumAnswer)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.TableData9
	for rows.Next() {
		var users models.TableData9
		err := rows.Scan(&users.Number, &users.Chief, &users.DeputyChief, &users.DeputyChiefUNR, &users.DeputyChiefArmament,
			&users.DeputyChiefRear, &users.DeputyChiefVPR)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.TableData9{}
	}

	return userses, nil
}

func (PS *PgStorage) TextServer(ctx context.Context, login string) ([]models.FormData, error) {
	var idnum int64
	err := PS.connect.QueryRowContext(ctx, `SELECT idnum FROM public.users WHERE login = $1;`, login).Scan(&idnum)
	if err != nil {
		return nil, err
	}

	var idnumAnswer int64
	err = PS.connect.QueryRowContext(ctx, `SELECT id_answer FROM public."usersAnswer" WHERE f_users = $1 order by d_create desc limit 1;`, idnum).Scan(&idnumAnswer)
	if err != nil {
		return nil, err
	}

	rows, err := PS.connect.QueryContext(ctx, `SELECT 
    COALESCE(obstanovka, '') as chief, 
    COALESCE(s_date, '') as "deputyChief" 
	FROM public."textFromServer"
	where f_users =$1 and f_users_answer = $2;`, idnum, idnumAnswer)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var userses []models.FormData
	for rows.Next() {
		var users models.FormData
		err := rows.Scan(&users.ObstanovkaInput, &users.MonthInput)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.FormData{}
	}
	return userses, nil
}

func (PS *PgStorage) GetTable4(ctx context.Context, login string) ([]models.TableData10, error) {
	var idnum int64
	err := PS.connect.QueryRowContext(ctx, `SELECT idnum FROM public.users WHERE login = $1;`, login).Scan(&idnum)
	if err != nil {
		return nil, err
	}

	var idnumAnswer int64
	err = PS.connect.QueryRowContext(ctx, `SELECT id_answer FROM public."usersAnswer" WHERE f_users = $1 order by d_create desc limit 1;`, idnum).Scan(&idnumAnswer)
	if err != nil {
		return nil, err
	}

	rows, err := PS.connect.QueryContext(ctx, `SELECT 
    COALESCE(idnum, 0) as idnum, 
    COALESCE("TheFieldOfActivity", '') as TheFieldOfActivity, 
    COALESCE("datesLocation", '') as "datesLocation", 
    COALESCE("positionTitle", '') as "positionTitle", 
    COALESCE("kolVoLS", '') as "kolVoLS"
	FROM public.table4
	where f_users =$1 and f_users_answer = $2;`, idnum, idnumAnswer)
	if err != nil {
		return nil, err
	}
	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
		}
	}(rows)
	var userses []models.TableData10
	for rows.Next() {
		var users models.TableData10
		err := rows.Scan(&users.Number, &users.TheFieldOfActivity, &users.DatesLocation, &users.PositionTitle, &users.KolVoLS)
		if err != nil {
			return nil, err
		}
		userses = append(userses, users)
	}

	if len(userses) == 0 {
		userses = []models.TableData10{}
	}

	return userses, nil
}

func (PS *PgStorage) AddAnswer(ctx context.Context, task models.AddTask, login string) (int64, error) {
	tx, err := PS.connect.BeginTx(ctx, nil)
	if err != nil {
		return 0, err
	}
	defer func() {
		if err != nil {
			err := tx.Rollback()
			if err != nil {
				return
			}
			return
		}
		err = tx.Commit()
	}()

	var idnum int64
	err = PS.connect.QueryRowContext(ctx, `SELECT idnum FROM public.users WHERE login = $1;`, login).Scan(&idnum)
	if err != nil {
		return 0, err
	}

	var idnumAnswer int64
	err = PS.connect.QueryRowContext(ctx, `SELECT id_answer FROM public."usersAnswer" WHERE f_users = $1 and is_complete != null order by d_create desc limit 1;`, idnum).Scan(&idnumAnswer)
	if err != nil {
		return 0, err
	}

	jsonData, err := json.Marshal(task.TableData)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `
	INSERT INTO public.table2(event, "eventDates", "eventDetails", "personnelCount", id_users, id_answer_users)
		SELECT t.event, t."eventDates", t."eventDetails", t."personnelCount", $1, $2
			FROM jsonb_populate_recordset(NULL::public.table2, $3::jsonb) AS t
	`, idnum, idnumAnswer, jsonData)
	if err != nil {
		return 0, err
	}

	jsonData2, err := json.Marshal(task.TableData2)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
	INSERT INTO public."table2.1"(event2, "eventDates2", "eventDetails2", "personnelCount2", f_users, id_users_answer)
	SELECT t.event2, t."eventDates2", t."eventDetails2", t."personnelCount2", $1, $2
	FROM jsonb_populate_recordset(NULL::public."table2.1", $3::jsonb) AS t
	`, idnum, idnumAnswer, jsonData2)
	if err != nil {
		return 0, err
	}

	jsonData3, err := json.Marshal(task.TableData3)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table5("DivisionOrganization", "FIOStarshy", "TypeOfPractice", "DatesAndVenue", "QuantityOfLs4", "AdditionalInformation", f_users, f_users_answer)
    SELECT t."DivisionOrganization", t."FIOStarshy", t."TypeOfPractice", t."DatesAndVenue", t."QuantityOfLs4", t."AdditionalInformation", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table5, $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData3)
	if err != nil {
		return 0, err
	}

	jsonData4, err := json.Marshal(task.TableData4)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table6("DivisionOrganizationTable5", "FIOStarshyTable5", "ThePurposeOfTheBusinessTripTable5", "DatesAndVenueTable5", "QuantityOfLsTable5", "AdditionalInformationTable5", f_users, f_users_answer)
    SELECT t."DivisionOrganizationTable5", t."FIOStarshyTable5", t."ThePurposeOfTheBusinessTripTable5", t."DatesAndVenueTable5", t."QuantityOfLsTable5", t."AdditionalInformationTable5", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table6, $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData4)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public.text6("energyDeviationHeat", "energyDeviationWater","energyDeviationPower", f_users, f_users_answer) 
		VALUES ($1, $2, $3, $4,$5)`,
		task.FormData.EnergyDeviationHeat, task.FormData.EnergyDeviationWater, task.FormData.EnergyDeviationPower, idnum, idnumAnswer)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public.text7("StateOfLawAndOrderAndMilitaryDiscipline", f_users, f_users_answer) 
		VALUES ($1, $2, $3)`,
		task.FormData.StateOfLawAndOrderAndMilitaryDiscipline, idnum, idnumAnswer)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public.text8("InformationAboutOfficials", f_users, f_users_answer) 
		VALUES ($1, $2, $3)`,
		task.FormData.InformationAboutOfficials, idnum, idnumAnswer)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public.table9(f_users, f_users_answer, "dayTotal",
																	"dayORZ", 
																	"dayPneumonia", 
																	"soldiersHospitalTotal", 
																	"soldiersHospitalORZ", 
																	"soldiersHospitalPneumonia", 
																	"cadetsHospitalTotal", 
																	"cadetsHospitalORZ", 
																	"cadetsHospitalPneumonia",
																	"soldiersStationaryTotal", 
																	"soldiersORZ", 
																	"soldiersPneumonia",
																	"cadetsStationaryTotal", 
																	"cadetsORZ", 
																	"cadetsPneumonia", 
																	"totalTotal", 
																	"totalORZ", 
																	"totalPneumonia"                  ) 
		VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)`,
		idnum, idnumAnswer, task.FormData.DayTotal,
		task.FormData.DayORZ, task.FormData.DayPneumonia,
		task.FormData.SoldiersHospitalTotal, task.FormData.SoldiersHospitalORZ, task.FormData.SoldiersHospitalPneumonia,
		task.FormData.CadetsHospitalTotal, task.FormData.CadetsHospitalORZ, task.FormData.CadetsHospitalPneumonia,
		task.FormData.SoldiersStationaryTotal, task.FormData.SoldiersORZ, task.FormData.SoldiersPneumonia,
		task.FormData.CadetsStationaryTotal, task.FormData.CadetsORZ, task.FormData.CadetsPneumonia,
		task.FormData.TotalTotal, task.FormData.TotalORZ, task.FormData.TotalPneumonia)
	if err != nil {
		return 0, err
	}

	jsonData5, err := json.Marshal(task.TableData5)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public."table9.1"("MilitaryRank", "PeopleName", "Circumstances", f_users, f_user_answer)
    SELECT t."MilitaryRank", t."PeopleName", t."Circumstances", $1, $2
    FROM jsonb_populate_recordset(NULL::public."table9.1", $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData5)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `INSERT INTO public.table10("recruitmentPlan","inTotal","fromAmongTheMilitaryPersonnel","fromAmongTheCadets",
                           											"fromAmongTheGP", "Note", f_users, f_users_answer) 
		VALUES ($1, $2, $3, $4,$5,$6,$7,$8)`,
		task.FormData.RecruitmentPlan, task.FormData.InTotal, task.FormData.FromAmongTheMilitaryPersonnel, task.FormData.FromAmongTheCadets,
		task.FormData.FromAmongTheGP, task.FormData.Note, idnum, idnumAnswer)
	if err != nil {
		return 0, err
	}

	jsonData6, err := json.Marshal(task.TableData6)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table11("SeniorTeam", "CountPeople", "TheRouteOfTheRoute","TheTimingOfTheMovement","DateOfSwearingIn", f_users, f_users_answer)
    SELECT t."SeniorTeam", t."CountPeople", t."TheRouteOfTheRoute",t."TheTimingOfTheMovement", t."DateOfSwearingIn", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table11, $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData6)
	if err != nil {
		return 0, err
	}

	jsonData7, err := json.Marshal(task.TableData7)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table12("Division", "FIO", "PurposeOfArrival","Deadlines","CountPeople", "Note", f_users, f_users_answer)
    SELECT t."Division", t."FIO", t."PurposeOfArrival",t."Deadlines", t."CountPeople", t."Note", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table12, $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData7)
	if err != nil {
		return 0, err
	}

	jsonData8, err := json.Marshal(task.TableData8)
	if err != nil {
		return 0, err
	}
	_, err = tx.ExecContext(ctx, `
    INSERT INTO public.table13("Division", "OnTheRoad", "OnTheWay", f_users, f_users_answer)
    SELECT t."Division", t."OnTheRoad", t."OnTheWay", $1, $2
    FROM jsonb_populate_recordset(NULL::public.table13, $3::jsonb) AS t
`, idnum, idnumAnswer, jsonData8)
	if err != nil {
		return 0, err
	}

	_, err = tx.ExecContext(ctx, `Update public."usersAnswer" set is_complete = 1 where id_answer = $1 `,
		idnumAnswer)
	if err != nil {
		return 0, err
	}

	return idnumAnswer, nil
}
