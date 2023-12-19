export const addRow = (setTableData) => {
    setTableData((prevData) => [
        ...prevData,
        {
            Number: prevData.length,
            event: '',
            eventDates: '',
            eventDetails: '',
            personnelCount: '',
        },
    ]);
};

export const addRow2 = (setTableData2) => {
    setTableData2((prevData) => [
        ...prevData,
        {
            Number: prevData.length,
            event2: '',
            eventDates2: '',
            eventDetails2: '',
            personnelCount2: '',
        },
    ]);
};

export const addRow3 = (setTableData3) => {
    setTableData3((prevData) => [
        ...prevData,
        {
            Number: prevData.length,
            DivisionOrganization:'',
            FIOStarshy:'',
            TypeOfPractice:'',
            DatesAndVenue:'',
            QuantityOfLs4:'',
            AdditionalInformation:'',
        },
    ]);
};

export const addRow4 = (setTableData4) => {
    setTableData4((prevData) => [
        ...prevData,
        {
            Number: prevData.length,
            DivisionOrganizationTable5:'',
            FIOStarshyTable5:'',
            ThePurposeOfTheBusinessTripTable5:'',
            DatesAndVenueTable5:'',
            QuantityOfLsTable5:'',
            AdditionalInformationTable5:'',
        },
    ]);
};

export const addRow5 = (setTableData5) => {
    setTableData5((prevData) => [
        ...prevData,
        {
            Number: prevData.length,
            MilitaryRank: '',
            PeopleName: '',
            Circumstances: '',
        },
    ]);
};

export const addRow6 = (setTableData6) => {
    setTableData6((prevData) => [
        ...prevData,
        {
            Number:prevData.length,
            SeniorTeam:'',
            CountPeople:'',
            TheRouteOfTheRoute:'',
            TheTimingOfTheMovement:'',
            DateOfSwearingIn:'',
        },
    ]);
};

export const addRow7 = (setTableData7) => {
    setTableData7((prevData) => [
        ...prevData,
        {
            Number:prevData.length,
            Division:'',
            FIO:'',
            Deadlines:'',
            CountPeople:'',
            Note:'',
        },
    ]);
};

export const addRow8 = (setTableData8) => {
    setTableData8((prevData) => [
        ...prevData,
        {
            Number:prevData.length,
            Division:'',
            OnTheRoad:'',
            OnTheWay:'',
        },
    ]);
};
