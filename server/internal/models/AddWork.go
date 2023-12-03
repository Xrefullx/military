package models

type AddWork struct {
	S_name    string `json:"s_name"`
	S_fio     string `json:"s_fio"`
	Idnum     string `json:"idnum"`
	Contest   string `json:"contest"`
	ContestId int64  `json:"contestId"`
}
