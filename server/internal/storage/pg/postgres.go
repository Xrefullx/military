package pg

import (
	"context"
	"database/sql"
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
