package models

import "time"

type FormData struct {
	ObstanovkaInput                         string    `json:"obstanovkaInput"`
	MonthInput                              string    `json:"monthInput"`
	DayORZ                                  int       `json:"dayORZ"`
	DayTotal                                int       `json:"dayTotal"`
	DayPneumonia                            int       `json:"dayPneumonia"`
	SoldiersHospitalTotal                   int       `json:"soldiersHospitalTotal"`
	SoldiersHospitalORZ                     int       `json:"soldiersHospitalORZ"`
	SoldiersHospitalPneumonia               int       `json:"soldiersHospitalPneumonia"`
	CadetsHospitalTotal                     int       `json:"cadetsHospitalTotal"`
	CadetsHospitalORZ                       int       `json:"cadetsHospitalORZ"`
	CadetsHospitalPneumonia                 int       `json:"cadetsHospitalPneumonia"`
	SoldiersStationaryTotal                 int       `json:"soldiersStationaryTotal"`
	SoldiersORZ                             int       `json:"soldiersORZ"`
	SoldiersPneumonia                       int       `json:"soldiersPneumonia"`
	CadetsStationaryTotal                   int       `json:"cadetsStationaryTotal"`
	CadetsORZ                               int       `json:"cadetsORZ"`
	CadetsPneumonia                         int       `json:"cadetsPneumonia"`
	TotalTotal                              int       `json:"totalTotal"`
	TotalORZ                                int       `json:"totalORZ"`
	TotalPneumonia                          int       `json:"totalPneumonia"`
	RecruitmentPlan                         string    `json:"recruitmentPlan"`
	InTotal                                 string    `json:"inTotal"`
	FromAmongTheMilitaryPersonnel           string    `json:"fromAmongTheMilitaryPersonnel"`
	FromAmongTheCadets                      string    `json:"fromAmongTheCadets"`
	FromAmongTheGP                          string    `json:"fromAmongTheGP"`
	Note                                    string    `json:"Note"`
	D_create                                time.Time `json:"d_create"`
	EnergyDeviationHeat                     string    `json:"energyDeviationHeat"`
	EnergyDeviationPower                    string    `json:"energyDeviationPower"`
	EnergyDeviationWater                    string    `json:"energyDeviationWater"`
	StateOfLawAndOrderAndMilitaryDiscipline string    `json:"stateOfLawAndOrderAndMilitaryDiscipline"`
	InformationAboutOfficials               string    `json:"informationAboutOfficials"`
}

type TableData struct {
	Number         int    `json:"Number"`
	Event          string `json:"event"`
	EventDates     string `json:"eventDates"`
	EventDetails   string `json:"eventDetails"`
	PersonnelCount string `json:"personnelCount"`
}

type TableData2 struct {
	Number          int    `json:"Number"`
	Event2          string `json:"event2"`
	EventDates2     string `json:"eventDates2"`
	EventDetails2   string `json:"eventDetails2"`
	PersonnelCount2 string `json:"personnelCount2"`
}

type TableData3 struct {
	Number                int    `json:"Number"`
	DivisionOrganization  string `json:"DivisionOrganization"`
	FIOStarshy            string `json:"FIOStarshy"`
	TypeOfPractice        string `json:"TypeOfPractice"`
	DatesAndVenue         string `json:"DatesAndVenue"`
	QuantityOfLs4         string `json:"QuantityOfLs4"`
	AdditionalInformation string `json:"AdditionalInformation"`
}

type TableData4 struct {
	Number                            int    `json:"Number"`
	DivisionOrganizationTable5        string `json:"DivisionOrganizationTable5"`
	FIOStarshyTable5                  string `json:"FIOStarshyTable5"`
	ThePurposeOfTheBusinessTripTable5 string `json:"ThePurposeOfTheBusinessTripTable5"`
	DatesAndVenueTable5               string `json:"DatesAndVenueTable5"`
	QuantityOfLsTable5                string `json:"QuantityOfLsTable5"`
	AdditionalInformationTable5       string `json:"AdditionalInformationTable5"`
}

type TableData5 struct {
	Number        int    `json:"Number"`
	MilitaryRank  string `json:"MilitaryRank"`
	PeopleName    string `json:"PeopleName"`
	Circumstances string `json:"Circumstances"`
}

type TableData6 struct {
	Number                 int    `json:"Number"`
	SeniorTeam             string `json:"SeniorTeam"`
	CountPeople            string `json:"CountPeople"`
	TheRouteOfTheRoute     string `json:"TheRouteOfTheRoute"`
	TheTimingOfTheMovement string `json:"TheTimingOfTheMovement"`
	DateOfSwearingIn       string `json:"DateOfSwearingIn"`
}

type TableData7 struct {
	Number           int    `json:"Number"`
	Division         string `json:"Division"`
	FIO              string `json:"FIO"`
	PurposeOfArrival string `json:"PurposeOfArrival"`
	Deadlines        string `json:"Deadlines"`
	CountPeople      string `json:"CountPeople"`
	Note             string `json:"Note"`
}

type TableData8 struct {
	Number    int    `json:"Number"`
	Division  string `json:"Division"`
	OnTheRoad string `json:"OnTheRoad"`
	OnTheWay  string `json:"OnTheWay"`
}

type TableData9 struct {
	Number              int    `json:"Number"`
	Chief               string `json:"chief"`
	DeputyChief         string `json:"deputyChief"`
	DeputyChiefUNR      string `json:"deputyChiefUNR"`
	DeputyChiefArmament string `json:"deputyChiefArmament"`
	DeputyChiefRear     string `json:"deputyChiefRear"`
	DeputyChiefVPR      string `json:"deputyChiefVPR"`
}

type TableData10 struct {
	Number             int    `json:"Number"`
	TheFieldOfActivity string `json:"TheFieldOfActivity"`
	DatesLocation      string `json:"datesLocation"`
	PositionTitle      string `json:"positionTitle"`
	KolVoLS            string `json:"kolVoLS"`
}

type AddTask struct {
	FormData    FormData      `json:"formData"`
	TableData   []TableData   `json:"tableData"`
	TableData2  []TableData2  `json:"tableData2"`
	TableData3  []TableData3  `json:"tableData3"`
	TableData4  []TableData4  `json:"tableData4"`
	TableData5  []TableData5  `json:"tableData5"`
	TableData6  []TableData6  `json:"tableData6"`
	TableData7  []TableData7  `json:"tableData7"`
	TableData8  []TableData8  `json:"tableData8"`
	TableData9  []TableData9  `json:"tableData9"`
	TableData10 []TableData10 `json:"tableData10"`
	Login       string        `json:"login"`
	UserIdnum   int           `json:"userIdnum"`
}
