package models

type Users struct {
	Login    string `json:"login"`
	Password string `json:"password"`
	Is_admin int64  `json:"is_admin"`
	Idnum    int64  `json:"idnum"`
	S_fio    string `json:"s_fio"`
}
