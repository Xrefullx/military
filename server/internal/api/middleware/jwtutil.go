package middleware

import (
	"errors"
	"github.com/dgrijalva/jwt-go"
	"os"
	"time"
)

func CreateToken(apiToken string) (string, error) {
	if apiToken != os.Getenv("API_TOKEN") {
		return "", errors.New("invalid API Token")
	}

	claims := jwt.MapClaims{
		"exp": time.Now().Add(time.Hour * 5).Unix(), // Срок действия токена (5 часов)
	}

	secretKey := []byte(os.Getenv("API_TOKEN"))
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(secretKey)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}
