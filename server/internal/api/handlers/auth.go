package handlers

import (
	"github.com/Xrefullx/military/internal/api/container"
	"github.com/Xrefullx/military/internal/api/middleware"
	"github.com/Xrefullx/military/internal/models"
	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
	"net/http"
	"strings"
)

func Auth(c *gin.Context) {
	var user models.Jwt
	if err := c.Bind(&user); err != nil || user.ApiToken == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body or missing apiToken"})
		return
	}

	log := container.GetLog()

	token, err := middleware.CreateToken(user.ApiToken)
	if err != nil {
		log.Error("Error creating token", zap.Error(err))
		if strings.Contains(err.Error(), "invalid API Token") {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid API Token"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Internal Server Error"})
		}
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": token})
}
