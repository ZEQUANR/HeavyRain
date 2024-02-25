package controller

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zequanr/HeavyRain/service"
	"github.com/zequanr/HeavyRain/utils"
)

func UserLogin(c *gin.Context) {
	var user struct {
		Account  string `json:"account" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.BindJSON(&user); err != nil {
		// middlewares.LogError(c, err)
		fmt.Println(err)

		c.JSON(http.StatusBadRequest, &gin.H{
			"message": "Invalid Parameter",
		})

		return
	}

	// 查询用户信息
	result, err := service.QueryUserByName(user.Account)
	if err != nil {
		// middlewares.LogError(c, err)
		c.JSON(497, &gin.H{
			"message": "Username or Password incorrect",
		})

		return
	}

	// 检查密码是否正确
	if !utils.Md5Check(user.Password, result.Password) {
		c.JSON(497, &gin.H{
			"message": "Username or Password incorrect",
		})

		return
	}

	// 创建 JWT
	token, err := utils.GenerateToken(result.ID, result.Role)
	if err != nil {
		// middlewares.LogError(c, err)
		c.JSON(http.StatusForbidden, &gin.H{
			"message": "Failed to apply for token",
		})

		return
	}

	c.JSON(http.StatusOK, &gin.H{
		"token": token,
	})
}
