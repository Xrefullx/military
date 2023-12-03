package middleware

import (
	"fmt"
	"github.com/Xrefullx/military/internal/models"
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gin-gonic/gin"
	"github.com/zhashkevych/auth/pkg/auth"
)

func JwtValid() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Header("Access-Control-Allow-Headers", "Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization,x-auth-token")
		c.Next()
		if c.Request.URL.Path == "/api/login" {
			return
		}
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

	}
}

func parseToken(accessToken string, signingKey []byte) (string, error) {
	token, err := jwt.ParseWithClaims(accessToken, &models.Claims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return signingKey, nil
	})
	if err != nil {
		return "", err
	}
	if claims, ok := token.Claims.(*models.Claims); ok && token.Valid {
		return claims.Login, nil
	}

	return "", auth.ErrInvalidAccessToken
}
