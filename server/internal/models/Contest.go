package models

import "time"

type Contest struct {
	Idnum     int64     `json:"idnum"`
	Contest   string    `json:"contest"`
	Work      string    `json:"work"`
	S_fio     string    `json:"s_fio"`
	Status    int64     `json:"status"`
	StartDate time.Time `json:"startDate"`
	EndDate   time.Time `json:"endDate"`
}
