package service

import (
	"fmt"

	"github.com/zequanr/HeavyRain/table"
)

func QueryUserExist(name string) bool {
	result := &table.User{}

	if err := dbConn.Model(result).Select("account").Where("account = ?", name).First(&result).Error; err != nil {
		fmt.Println(err)
		return false
	}

	return true
}

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
