export const addRow = (setTableData) => {
    setTableData((prevData) => [
        ...prevData,
        {
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
            DivisionOrganization:'',
            FIOStarshy:'',
            TypeOfPractice:'',
            DatesAndVenue:'',
            QuantityOfLs4:'',
            AdditionalInformation:'',
        },
    ]);
};
