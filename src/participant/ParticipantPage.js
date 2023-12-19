import React from 'react';
import './styles.css';
import {addRow,addRow2,addRow3,addRow4,addRow5,addRow6,addRow7,addRow8} from './utils/addRow'
import {removeRow,removeRow2,removeRow3,removeRow4,removeRow5,removeRow6,removeRow7,removeRow8} from './utils/removeRow'
import {handleRowChange,handleRowChange2,handleRowChange3,handleRowChange4,handleRowChange5,handleRowChange6,handleRowChange7,handleRowChange8} from './utils/changeRow'
import TableComponent from "./templates/table2";
import LeadershipTableComponent from "./templates/table1";
import TrainingTableComponent from "./templates/table2.1";
import WorkingGroupsTableComponent from "./templates/table4";
import InternshipsTableComponent from "./templates/table5";
import DataOnPersonnelOnBusinessTrips from './templates/table6'
import { useInitialFormData } from './utils/formData';
import EnergyDeviationRow from "./templates/text6";
import StateOfLawAndOrderAndMilitaryDiscipline from "./templates/text7";
import InformationAboutOfficials from "./templates/text8";
import RotatedTableComponent from "./templates/table9";
import CadetsOfTheBranch from "./templates/table9.1";
import ThePeriodOfAdmissionOfApplicants from "./templates/table10";
import TheCallForANewReplenishment from "./templates/table11";
import TheTeamsThatArrived from "./templates/table12";
import InformationAboutMilitaryPersonnelOfTheAcademy from "./templates/table13";


function ParticipantPage({ login, setIsAdmin }) {
    const { formData, setFormData, tableData,
        setTableData, tableData2,
        setTableData2, tableData3,
        setTableData3, tableData4,
        setTableData4, tableData5, setTableData5
        , tableData6, setTableData6,
    tableData7,setTableData7,
    tableData8,setTableData8} = useInitialFormData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToLog = {
            formData,
            tableData,
            tableData2,
            tableData3,
            tableData4,
            tableData5,
            tableData6,
            tableData7,
            tableData8,
        };
        console.log('Form submitted:', formDataToLog);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="text-center">
                <label htmlFor="obstanovkaInput">ОБСТАНОВКА В В/Ч   </label>
                <input className="input-text"
                    type="text"
                       id="obstanovkaInput"
                       name="obstanovkaInput"
                    value={formData.obstanovkaInput}
                    onChange={handleChange}
                />
            </div>

            <div className="text-center ">
                <label htmlFor="monthInput">на ЧЧ месяц 202  </label>
                <input className="input-text"
                    type="text"
                       id="monthInput"
                       name="monthInput"
                    value={formData.month}
                    onChange={handleChange}
                />
            </div>
        <div className="centered-tables"  >
            <LeadershipTableComponent
                formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}
            />
            <TableComponent
                tableData={tableData}
                setTableData={setTableData}
                handleRowChange={handleRowChange}
                addRow={addRow}
                removeRow={removeRow}
                handleSubmit={handleSubmit}
            />
            <TrainingTableComponent
                tableData={tableData2}
                setTableData={setTableData2}
                handleRowChange={handleRowChange2}
                addRow={addRow2}
                removeRow={removeRow2}
                handleSubmit={handleSubmit}
            />
            <WorkingGroupsTableComponent
                tableData={tableData} handleChange={handleChange} handleSubmit={handleSubmit}
            />
            <InternshipsTableComponent
                tableData={tableData3}
                setTableData={setTableData3}
                handleRowChange={handleRowChange3}
                addRow={addRow3}
                removeRow={removeRow3}
            />
            <DataOnPersonnelOnBusinessTrips
                tableData={tableData4}
                setTableData={setTableData4}
                handleRowChange={handleRowChange4}
                addRow={addRow4}
                removeRow={removeRow4}
            />
            <EnergyDeviationRow
                formData={formData}
                handleChange={handleChange}
            />
            <StateOfLawAndOrderAndMilitaryDiscipline
                formData={formData}
                handleChange={handleChange}
            />
            <InformationAboutOfficials
                formData={formData}
                handleChange={handleChange}
            />
            <RotatedTableComponent
                formData={formData}
                setFormData = {setFormData}
            />
            <CadetsOfTheBranch
                tableData={tableData5}
                setTableData={setTableData5}
                handleRowChange={handleRowChange5}
                addRow={addRow5}
                removeRow={removeRow5}
                handleSubmit={handleSubmit}
            />
            <ThePeriodOfAdmissionOfApplicants
                formData={formData}
                handleChange={handleChange}
                handleRowChange={handleRowChange}
            />
            <TheCallForANewReplenishment
                tableData={tableData6}
                setTableData={setTableData6}
                handleRowChange={handleRowChange6}
                addRow={addRow6}
                removeRow={removeRow6}
                handleSubmit={handleSubmit}
            />
            <TheTeamsThatArrived
                tableData={tableData7}
                setTableData={setTableData7}
                handleRowChange={handleRowChange7}
                addRow={addRow7}
                removeRow={removeRow7}
                handleSubmit={handleSubmit}
            />
            <InformationAboutMilitaryPersonnelOfTheAcademy
                tableData={tableData8}
                setTableData={setTableData8}
                handleRowChange={handleRowChange8}
                addRow={addRow8}
                removeRow={removeRow8}
                handleSubmit={handleSubmit}
            />
        </div>
        </div>
    );
}

export default ParticipantPage;
