package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zequanr/HeavyRain/utils"
)

const (
	ContextKeyUserID = "custom-user-id"
)

func JwtAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := utils.TokenValid(c)
		if err != nil {
			c.String(http.StatusUnauthorized, "message: Token invalid")
			c.Abort()
			return
		}

		id, err := utils.ExtractTokenID(c)
		if err != nil {
			c.String(http.StatusUnauthorized, "message: Extract token name fail")
			c.Abort()
			return
		}

		c.Set(ContextKeyUserID, id)

		c.Next()
	}
}
