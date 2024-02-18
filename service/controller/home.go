package controller

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func DoctorLogin(c *gin.Context) {
	var data struct {
		Account  string `json:"account" binding:"required"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.BindJSON(&data); err != nil {
		fmt.Println(data)
		return
	}

	fmt.Println(data.Account)

	c.JSON(http.StatusOK, gin.H{
		"message": "pong",
	})

	// c.JSON(http.StatusOK, gin.H{
	// 	"data": gin.H{
	// 		"token":       token,
	// 		"doctor_id":   doctorRoleInfo.ID,
	// 		"doctor_name": doctorRoleInfo.Name,
	// 		"role":        doctorRoleInfo.Role,
	// 	},
	// })
}
