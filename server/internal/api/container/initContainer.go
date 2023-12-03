package container

import (
	"github.com/Xrefullx/military/internal/models"
	"github.com/Xrefullx/military/internal/storage"
	"go.uber.org/zap"
)

func GetLog() *zap.Logger {
	return DiContainer.Get("zap-logger").(*zap.Logger)
}

func GetStorage() storage.MaxbonusStorage {
	return DiContainer.Get("storage").(storage.MaxbonusStorage)
}

func GetConfig() models.Config {
	return DiContainer.Get("server-config").(models.Config)
}
