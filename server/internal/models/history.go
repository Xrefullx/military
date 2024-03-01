package models

import "time"

type History struct {
	Id_answer int64     `json:"id_answer"`
	D_create  time.Time `json:"d_create"`
	D_finish  time.Time `json:"d_finish"`
	Idnum     int64     `json:"idnum"`
}
