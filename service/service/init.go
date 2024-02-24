package service

import (
	"github.com/zequanr/HeavyRain/driver"
	"gorm.io/gorm"
)

var dbConn *gorm.DB

func init() {
	dbConn = driver.GetDBConnection()
}
