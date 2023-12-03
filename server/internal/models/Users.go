package models

type AddUsers struct {
	Login    string `json:"login"`
	Password string `json:"password"`
	S_name1  string `json:"s_name1"`
	S_name2  string `json:"s_name2"`
	S_name3  string `json:"s_name3"`
	F_admin  int64  `json:"f_admin"`
	Idnum    int64  `json:"idnum"`
	S_fio    string `json:"s_fio"`
}
