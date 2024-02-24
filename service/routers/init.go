package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/zequanr/HeavyRain/controller"
)

func Init(r *gin.Engine) {
	v1 := r.Group("/api/v1")

	{
		v1.POST("/login", controller.UserLogin)
	}
}
