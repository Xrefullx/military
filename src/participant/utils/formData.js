import { useState } from 'react';

export const useInitialFormData = () => {
    const [formData, setFormData] = useState({

        obstanovkaInput:'',
        monthInput:'',

        dayORZ: 0,
        dayTotal: 0,
        dayPneumonia: 0,

        soldiersHospitalTotal: 0,
        soldiersHospitalORZ: 0,
        soldiersHospitalPneumonia: 0,

        cadetsHospitalTotal: 0,
        cadetsHospitalORZ: 0,
        cadetsHospitalPneumonia: 0,

        soldiersStationaryTotal: 0,
        soldiersORZ: 0,
        soldiersPneumonia: 0,

        cadetsStationaryTotal: 0,
        cadetsORZ: 0,
        cadetsPneumonia: 0,

        totalTotal: 0,
        totalORZ: 0,
        totalPneumonia: 0,

        recruitmentPlan:'',
        inTotal:'',
        fromAmongTheMilitaryPersonnel:'',
        fromAmongTheCadets:'',
        fromAmongTheGP:'',
        Note:'',
    });

    const [tableData, setTableData] = useState([
        {
            Number:0,
            event: '',
            eventDates: '',
            eventDetails: '',
            personnelCount: '',
        },
    ]);

    const [tableData2, setTableData2] = useState([
        {
            Number:0,
            event2: '',
            eventDates2: '',
            eventDetails2: '',
            personnelCount2: '',
        },
    ]);

    const [tableData3, setTableData3] = useState([
        {
            Number:0,
            DivisionOrganization:'',
            FIOStarshy:'',
            TypeOfPractice:'',
            DatesAndVenue:'',
            QuantityOfLs4:'',
            AdditionalInformation:'',
        },
    ]);

    const [tableData4, setTableData4] = useState([
        {
            Number:0,
            DivisionOrganizationTable5:'',
            FIOStarshyTable5:'',
            ThePurposeOfTheBusinessTripTable5:'',
            DatesAndVenueTable5:'',
            QuantityOfLsTable5:'',
            AdditionalInformationTable5:'',
        },
    ]);

    const [tableData5, setTableData5] = useState([
        {
            Number:0,
            MilitaryRank:'',
            PeopleName:'',
            Circumstances:'',
        },
    ]);

    const [tableData6, setTableData6] = useState([
        {
            Number:0,
            SeniorTeam:'',
            CountPeople:'',
            TheRouteOfTheRoute:'',
            TheTimingOfTheMovement:'',
            DateOfSwearingIn:'',
        },
    ]);

    const [tableData7, setTableData7] = useState([
        {
            Number:0,
            Division:'',
            FIO:'',
            PurposeOfArrival:'',
            Deadlines:'',
            CountPeople:'',
            Note:'',
        },
    ]);

    const [tableData8, setTableData8] = useState([
        {
            Number:0,
            Division:'',
            OnTheRoad:'',
            OnTheWay:'',
        },
    ]);

    const [tableData9, setTableData9] = useState([
        {
            Number:0,
            chief:'',
            deputyChief:'',
            deputyChiefUNR:'',
            deputyChiefArmament:'',
            deputyChiefRear:'',
            deputyChiefVPR:'',
        },
    ]);

    const [tableData10, setTableData10] = useState([
        {
            Number:0,
            TheFieldOfActivity:'',
            datesLocation:'',
            positionTitle:'',
            kolVoLS:'',
        },
    ]);

    return { formData, setFormData, tableData, setTableData, tableData2, setTableData2,
        tableData3, setTableData3, tableData4, setTableData4, tableData5, setTableData5,
        tableData6, setTableData6,tableData7, setTableData7,tableData8,setTableData8,
        tableData9,setTableData9,tableData10,setTableData10};
};
