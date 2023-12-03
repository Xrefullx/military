package storage

import (
	"context"
	"github.com/Xrefullx/military/internal/models"
)

type MaxbonusStorage interface {
	Ping() error
	Close() error
	Authentication(ctx context.Context, user models.AddUsers) (int, int, error)
	AddUser(ctx context.Context, user models.AddUsers) error
	AddContest(ctx context.Context, user models.AddContest) error
	AddWork(ctx context.Context, work models.AddWork) error
	GetAllUsers(ctx context.Context) ([]models.AddUsers, error)
	GetAllUsersVotes(ctx context.Context) ([]models.AddUsers, error)
	DeleteUsers(ctx context.Context, UsersId int64) error
	DeleteContest(ctx context.Context, ContestId int64) error
	GetAllWork(ctx context.Context, login string) ([]models.AddWork, error)
	DeleteWork(ctx context.Context, WorkId int64) error
	GetRecentId(ctx context.Context, RecentId int64) ([]models.Fields, error)
	GetAllRecent(ctx context.Context) ([]models.Fields, error)
	GetAllContest(ctx context.Context) ([]models.Contest, error)
	AddRecent(ctx context.Context, fields models.Fields) error
	GetAllWorkGet(ctx context.Context) ([]models.AddWork, error)
	GetAllWorkGetPartipition(ctx context.Context) ([]models.AddWork, error)
	UpdateUsers(ctx context.Context, taskID int64, updateData map[string]interface{}) error
	UpdateStatus(ctx context.Context, taskID int64, updateData map[string]interface{}) error
	GetFI(ctx context.Context, login string) ([]models.AddUsers, error)
	GetFIO(ctx context.Context, login string) ([]models.AddUsers, error)
}
