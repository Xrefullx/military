import React,{useState} from 'react';
import './styles.css';
import {addRow,addRow2,addRow3} from './utils/addRow'
import {removeRow,removeRow2,removeRow3} from './utils/removeRow'
import {handleRowChange,handleRowChange2,handleRowChange3} from './utils/changeRow'
import TableComponent from "./templates/table2";
import LeadershipTableComponent from "./templates/table1";
import TrainingTableComponent from "./templates/table3";
import WorkingGroupsTableComponent from "./templates/table4";
import InternshipsTableComponent from "./templates/table5";
import { useInitialFormData } from './utils/formData';

function ParticipantPage({ login, setIsAdmin }) {
    const { formData, setFormData, tableData, setTableData, tableData2, setTableData2, tableData3, setTableData3, tableData4, setTableData4 } = useInitialFormData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToLog = {
            formData,
            tableData,
            tableData2,
            tableData3,
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
        <div className="centered-tables">
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
        </div>
    );
}

export default ParticipantPage;
