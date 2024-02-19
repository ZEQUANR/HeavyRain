package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/zequanr/HeavyRain/driver"
	"github.com/zequanr/HeavyRain/routers"
)

func main() {
	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization", "Accept", "X-Requested-With"}
	config.AllowOrigins = []string{"*"}
	config.ExposeHeaders = []string{"Content-Length", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Cache-Control", "Content-Language", "Content-Type"}
	config.AllowCredentials = true
	r.Use(cors.New(config))

	routers.Init(r)

	// r.POST("/ping", func(c *gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"message": "pong",
	// 	})
	// })

	r.Run(":6145") // 监听并在 0.0.0.0:8080 上启动服务
}
