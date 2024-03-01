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
			gUser.POST("/addTask", AddTask)
			gUser.POST("/table1", GetTable1)
			gUser.POST("/textServer", TextServer)
			gUser.POST("/table4", GetTable4)
			gUser.POST("/addAnswer", AddAnswer)
			gUser.GET("/history/:idnum", GetHistoryById)
			gUser.GET("/textServer/:idnum", GetTextServer)
			gUser.GET("/table1/:idnum", GetTable1Get)
			gUser.GET("/table2/:idnum", GetTable2)
			gUser.GET("/table21/:idnum", GetTable21)
			gUser.GET("/table4/:idnum", GetTable4Get)
			gUser.GET("/table5/:idnum", GetTable5)
			gUser.GET("/table6/:idnum", GetTable6)
			gUser.GET("/text6/:idnum", GetText6)
			gUser.GET("/text7/:idnum", GetText7)
			gUser.GET("/text8/:idnum", GetText8)
			gUser.GET("/table9/:idnum", GetTable9)
			gUser.GET("/table91/:idnum", GetTable91)
			gUser.GET("/table10/:idnum", GetTable10)
			gUser.GET("/table11/:idnum", GetTable11)
			gUser.GET("/table12/:idnum", GetTable12)
			gUser.GET("/table13/:idnum", GetTable13)
		}
	}
	return r
}
