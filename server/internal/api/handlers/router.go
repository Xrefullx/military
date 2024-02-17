package handlers

import (
	"github.com/Xrefullx/military/internal/api/middleware"
	"github.com/Xrefullx/military/internal/models"
	"github.com/gin-gonic/gin"
)

func Router(cfg models.Config) *gin.Engine {
	if cfg.ReleaseMOD {
		gin.SetMode(gin.DebugMode)
	}
	r := gin.New()
	r.Use(gin.Logger())

	r.Use(middleware.SetupCorsMiddleware())

	gUser := r.Group("/api")
	{

		r.POST("/api/auth", Auth)
		gUser.Use(middleware.JwtValid())
		{
			gUser.POST("/login", Login)
			gUser.GET("/getUsers", GetUsers)
		}

	}
	return r
}
