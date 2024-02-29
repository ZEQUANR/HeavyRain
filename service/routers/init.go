package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/zequanr/HeavyRain/controller"
	"github.com/zequanr/HeavyRain/middlewares"
)

func Init(r *gin.Engine) {
	v1 := r.Group("/api/v1")

	{
		v1.POST("/user/login", controller.UserLogin)

		user := v1.Group("/user", middlewares.JwtAuthMiddleware())

		{
			user.POST("/info", controller.UserInfo)
		}
	}
}
