package storage

import (
	"context"
	"github.com/Xrefullx/military/internal/models"
)

type MaxbonusStorage interface {
	Ping() error
	Close() error
	Authentication(ctx context.Context, user models.Users) (int, int, error)
	GetAllUsers(ctx context.Context) ([]models.Users, error)
	AddTask(ctx context.Context, user models.AddTask) (int64, error)
	GetTable1(ctx context.Context, login string) ([]models.TableData9, error)
	TextServer(ctx context.Context, login string) ([]models.FormData, error)
	GetTable4(ctx context.Context, login string) ([]models.TableData10, error)
	AddAnswer(ctx context.Context, task models.AddTask, login string) (int64, error)
}
