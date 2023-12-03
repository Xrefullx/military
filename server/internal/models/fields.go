package models

type Fields struct {
	S_name       string `json:"s_name"`
	F_relevance  int64  `json:"f_relevance"`
	F_novelty    int64  `json:"f_novelty"`
	F_practice   int64  `json:"f_practice"`
	F_dokvo      int64  `json:"f_dokvo"`
	F_quality    int64  `json:"f_quality"`
	Sum_field    int64  `json:"sum_field"`
	F_work       int64  `json:"f_work"`
	S_FIO        string `json:"s_fio"`
	Login        string `json:"login"`
	S_fio2       string `json:"s_fio_2"`
	Total_voters int64  `json:"total_voters"`
}
