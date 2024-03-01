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
	GetHistoryById(ctx context.Context, idnum int64) ([]models.History, error)
	GetTextServer(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetTable1Get(ctx context.Context, id_answer int64) ([]models.TableData9, error)
	GetTable2(ctx context.Context, id_answer int64) ([]models.TableData, error)
	GetTable21(ctx context.Context, id_answer int64) ([]models.TableData2, error)
	GetTable4Get(ctx context.Context, id_answer int64) ([]models.TableData10, error)
	GetTable5(ctx context.Context, id_answer int64) ([]models.TableData3, error)
	GetTable6(ctx context.Context, id_answer int64) ([]models.TableData4, error)
	GetText6(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetText7(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetText8(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetTable9(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetTable91(ctx context.Context, id_answer int64) ([]models.TableData5, error)
	GetTable10(ctx context.Context, id_answer int64) ([]models.FormData, error)
	GetTable11(ctx context.Context, id_answer int64) ([]models.TableData6, error)
	GetTable12(ctx context.Context, id_answer int64) ([]models.TableData7, error)
	GetTable13(ctx context.Context, id_answer int64) ([]models.TableData8, error)
}
