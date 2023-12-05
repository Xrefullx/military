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
