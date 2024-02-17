package handlers

import (
	"context"
	"github.com/Xrefullx/military/internal/api/constant"
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

func GetUsers(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), constant.TimeOutRequest)
	defer cancel()
	log := container.GetLog()
	storage := container.GetStorage()
	users, err := storage.GetAllUsers(ctx)
	if err != nil {
		log.Error(constant.ErrorWorkDataBase, zap.Error(err), zap.String("func", "GetAllUsers"))
		c.String(http.StatusInternalServerError, constant.ErrorWorkDataBase)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"users": users,
	})
}
