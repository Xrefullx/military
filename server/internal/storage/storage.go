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
}
