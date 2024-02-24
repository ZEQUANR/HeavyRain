package service

import (
	"github.com/zequanr/HeavyRain/table"
)

func UserNameIsExists(name string) bool {
	user := &table.User{
		Account: name,
	}

	if r := dbConn.Model(user).Select("account").Where(user).Find(user).RowsAffected; r > 0 {
		return true
	}

	return false
}
