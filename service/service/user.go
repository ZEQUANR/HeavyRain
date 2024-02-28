package service

import (
	"github.com/zequanr/HeavyRain/table"
)

func QueryUserByName(name string) (*table.User, error) {
	result := &table.User{}

	if err := dbConn.Model(result).Select("id", "role", "password").Where("account = ?", name).First(&result).Error; err != nil {
		return nil, err
	}

	return result, nil
}

// func QueryUserPermissionsByID(userID uint) (*table.User, error) {
// 	user := &table.User{}

// 	if err := dbConn.Model(user).Select("").Where("id = ?", userID).First(&user).Error; err != nil {
// 		return nil, err
// 	}

// 	return user, nil
// }
