import { useState } from 'react';

export const useInitialFormData = () => {
    const [formData, setFormData] = useState({
        chief: '',
        deputyChief: '',
        deputyChiefUNR: '',
        deputyChiefArmament: '',
        deputyChiefRear: '',
        deputyChiefVPR: '',

        TheFieldOfActivity:'',
        datesLocation:'',
        positionTitle:'' ,
        kolVoLS:'',
    });

    const [tableData, setTableData] = useState([
        {
            event: '',
            eventDates: '',
            eventDetails: '',
            personnelCount: '',
        },
    ]);

    const [tableData2, setTableData2] = useState([
        {
            event2: '',
            eventDates2: '',
            eventDetails2: '',
            personnelCount2: '',
        },
    ]);

    const [tableData3, setTableData3] = useState([
        {
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
            DivisionOrganization:'',
            FIOStarshy:'',
            TypeOfPractice:'',
            DatesAndVenue:'',
            QuantityOfLs4:'',
            AdditionalInformation:'',
        },
    ]);

    return { formData, setFormData, tableData, setTableData, tableData2, setTableData2, tableData3, setTableData3, tableData4, setTableData4 };
};
