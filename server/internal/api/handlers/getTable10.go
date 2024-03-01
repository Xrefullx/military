package handlers

import (
	"context"
	"github.com/Xrefullx/military/internal/api/constant"
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
	"strconv"
)

func GetTable10(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), constant.TimeOutRequest)
	defer cancel()
	log := container.GetLog()
	storage := container.GetStorage()
	taskID := c.Param("idnum")
	if taskID == "" {
		log.Error("Task ID is missing")
		c.String(http.StatusBadRequest, "Task ID is missing")
		return
	}
	taskIDInt, err := strconv.ParseInt(taskID, 10, 64)
	if err != nil {
		log.Error("Invalid Task ID")
		c.String(http.StatusBadRequest, "Invalid Task ID")
		return
	}
	users, err := storage.GetTable10(ctx, taskIDInt)
	if err != nil {
		log.Error(constant.ErrorWorkDataBase, zap.Error(err), zap.String("func", "GetHistoryById"))
		c.String(http.StatusInternalServerError, constant.ErrorWorkDataBase)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"user": users,
	})
}
