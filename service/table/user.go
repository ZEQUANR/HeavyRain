package table

import "time"

type User struct {
	ID        uint   `gorm:"primarykey"`
	Account   string `gorm:"unique"`
	Password  string `gorm:"not null"`
	Role      string `gorm:"not null"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
