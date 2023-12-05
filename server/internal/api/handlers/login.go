package handlers

import (
	"context"
	"github.com/Xrefullx/military/internal/api/constant"
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/Xrefullx/military/internal/api/utils"
	"github.com/Xrefullx/military/internal/models"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
)

func Login(c *gin.Context) {
	ctx, cancel := context.WithTimeout(c.Request.Context(), constant.TimeOutRequest)
	defer cancel()
	if !utils.ValidContent(c, "application/json") {
		return
	}
	log := container.GetLog()
	storage := container.GetStorage()
	var user models.Users
	if err := c.Bind(&user); err != nil {
		log.Error(constant.ErrorUnmarshalBody, zap.Error(err))
		c.String(http.StatusInternalServerError, constant.ErrorUnmarshalBody)
		return
	}
	log.Debug("авторизация пользователя", zap.Any("user", user))
	if user.Login == "" || user.Password == "" {
		log.Debug("не валидные логин или пароль", zap.Any("user", user))
		c.String(http.StatusBadRequest, "не валидные логин или пароль")
		return
	}
	authenticationUser, isAdmin, err := storage.Authentication(ctx, user)
	if err != nil {
		log.Error(constant.ErrorWorkDataBase, zap.Error(err))
		c.String(http.StatusInternalServerError, constant.ErrorWorkDataBase)
		return
	}
	if authenticationUser == 0 {
		log.Debug("пароль или логин не верный", zap.Any("user", user))
		c.String(http.StatusUnauthorized, "пароль или логин не верный")
		return
	}

	response := gin.H{
		"is_admin": isAdmin,
	}
	c.JSON(200, response)
}
