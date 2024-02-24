package service

import (
	"github.com/zequanr/HeavyRain/table"
)

func QueryUserByName(name string) (*table.User, error) {
	result := &table.User{}

	if err := dbConn.Model(result).Select("id", "account", "role", "password").Where("account = ?", name).First(&result).Error; err != nil {
		return nil, err
	}

	return result, nil
}
