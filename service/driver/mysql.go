package dirver

import (
	"fmt"

	"github.com/zequanr/HeavyRain/table"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

const (
	MysqlHost     = "49.232.171.117"
	MysqlPort     = "3306"
	MysqlUser     = "root"
	MysqlPassword = "987654321"
	Database      = "home"
	charset       = "utf8mb4"
)

var conn *gorm.DB

func initMysql() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/?charset=%s&parseTime=True&loc=Local", MysqlUser, MysqlPassword, MysqlHost, MysqlPort, charset)

	if conn, err := gorm.Open(mysql.Open(dsn), &gorm.Config{}); err != nil {
		panic(err)
	} else {
		conn.Exec("CREATE DATABASE IF NOT EXISTS " + Database + " DEFAULT CHARACTER SET " + charset)
		conn.Exec("USE " + Database)

		conn.AutoMigrate(&table.User{})
	}
}

func GetDBConnection() *gorm.DB {
	return conn
}
