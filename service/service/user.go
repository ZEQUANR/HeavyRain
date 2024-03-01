package service

import (
	"github.com/zequanr/HeavyRain/table"
)

func QueryUserByName(name string) (*table.User, error) {
	result := &table.User{}

	if err := dbConn.Model(result).Select("id", "password").Where("account = ?", name).First(&result).Error; err != nil {
		return nil, err
	}

	return result, nil
}

func QueryUserByID(userID uint) (*table.User, error) {
	result := &table.User{}

	if err := dbConn.Model(result).Select("id", "account", "role").Where("id = ?", userID).First(&result).Error; err != nil {
		return nil, err
	}

	return result, nil
}
