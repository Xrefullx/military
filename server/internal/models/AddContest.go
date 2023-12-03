package models

import "time"

type AddContest struct {
	S_name    string    `json:"s_name"`
	StartDate time.Time `json:"startDate"`
	EndDate   time.Time `json:"endDate"`
}
