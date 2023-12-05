package middleware

import (
	"github.com/dgrijalva/jwt-go/v4"
	"github.com/gin-gonic/gin"
	"net/http"
	"os"
	"strings"
)

func JwtValid() gin.HandlerFunc {
	return func(c *gin.Context) {
		tokenStringWithPrefix := c.GetHeader("Authorization")
		secretKey := []byte(os.Getenv("API_TOKEN"))

		if tokenStringWithPrefix == "" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}
		tokenString := strings.Replace(tokenStringWithPrefix, "Bearer ", "", 1)

		token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
			return secretKey, nil
		})
		if err != nil || !token.Valid {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid token"})
			c.Abort()
			return
		}

		c.Next()
	}
}
