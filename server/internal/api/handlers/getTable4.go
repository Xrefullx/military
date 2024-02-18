package handlers

import (
	"context"
	"github.com/Xrefullx/military/internal/api/constant"
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

func GetTable4(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), constant.TimeOutRequest)
	defer cancel()
	log := container.GetLog()
	storage := container.GetStorage()

	var requestData struct {
		Login string `json:"login"`
	}
	if err := c.ShouldBindJSON(&requestData); err != nil {
		log.Error(constant.ErrorUnmarshalBody, zap.Error(err), zap.String("func", "GetTable4"))
		c.String(http.StatusBadRequest, constant.ErrorUnmarshalBody)
		return
	}
	users, err := storage.GetTable4(ctx, requestData.Login)
	if err != nil {
		log.Error(constant.ErrorWorkDataBase, zap.Error(err), zap.String("func", "GetTable4"))
		c.String(http.StatusInternalServerError, constant.ErrorWorkDataBase)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"table4": users,
	})
}
