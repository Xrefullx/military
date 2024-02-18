package handlers

import (
	"context"
	"encoding/json"
	"github.com/Xrefullx/military/internal/api/constant"
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/Xrefullx/military/internal/api/utils"
	"github.com/Xrefullx/military/internal/models"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

func AddTask(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), constant.TimeOutRequest)
	defer cancel()
	if !utils.ValidContent(c, "application/json") {
		return
	}
	log := container.GetLog()
	storage := container.GetStorage()
	var task models.AddTask
	err := json.NewDecoder(c.Request.Body).Decode(&task)
	if err != nil {
		log.Error(constant.ErrorUnmarshalBody, zap.Error(err))
		c.String(http.StatusInternalServerError, constant.ErrorUnmarshalBody)
		return
	}
	log.Debug("Добавление новой задачи", zap.Any("task", task))

	id, err := storage.AddTask(ctx, task)

	if err != nil {
		log.Error(constant.ErrorWorkDataBase, zap.Error(err), zap.String("func", "AddTask"))
		c.String(http.StatusInternalServerError, constant.ErrorWorkDataBase)
		return
	}
	log.Debug("Новая задача добавлена успешно", zap.Any("task", task), zap.Int64("id", id))
	c.JSON(http.StatusCreated, gin.H{"id": id})
}
