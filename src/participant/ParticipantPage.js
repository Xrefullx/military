import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import {addRow, addRow2, addRow3, addRow4, addRow5, addRow6, addRow7, addRow8, addRow9} from './utils/addRow'
import {
    removeRow,
    removeRow2,
    removeRow3,
    removeRow4,
    removeRow5,
    removeRow6,
    removeRow7,
    removeRow8,
    removeRow9
} from './utils/removeRow'
import {
    handleRowChange,
    handleRowChange2,
    handleRowChange3,
    handleRowChange4,
    handleRowChange5,
    handleRowChange6,
    handleRowChange7,
    handleRowChange8,
    handleRowChange9
} from './utils/changeRow'
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
import LeadershipTableComponentReed from "../admin/components/templates/table1";
import axios from "axios";
import co from "co";
import WorkingGroupsTableComponentReed from "../admin/components/templates/table4";


function ParticipantPage({ login, setIsAdmin }) {
    const { formData, setFormData, tableData,
        setTableData, tableData2,
        setTableData2, tableData3,
        setTableData3, tableData4,
        setTableData4, tableData5, setTableData5
        , tableData6, setTableData6,
        tableData7,setTableData7,
        tableData8,setTableData8,
        setTableData9,tableData9} = useInitialFormData();

    const [showModal, setShowModal] = useState(false);

    const [inputData, setInputData] = useState({
        obstanovkaInput: '',
        monthInput: ''
    });

    const handleLogout = () => {
        setShowModal(true);
    };

    const history = useHistory();

    const handleConfirmLogout = () => {
        localStorage.clear();
        history.push('/login'); // Redirect to the login page or any other desired route
    };

    const handleCancelLogout = () => {
        setShowModal(false);
    };

    const [showModalSend, setShowModalSend] = useState(false);

    const handleSend = () => {
        setShowModalSend(true);
    };

    const handleCancelSend = () => {
        setShowModalSend(false);
    };

    const sendDataToServer = async (formDataToLog) => {
        try {
            let token = localStorage.getItem('token');

            if (!token) {
                token = await getAuthToken();
                localStorage.setItem('token', token);
            }

            const response = await axios.post('http://localhost:8080/api/addAnswer', formDataToLog, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            // Опционально: обработка ответа, если необходимо
            console.log('Response from server:', response.data);

            setShowModalSend(false);
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };

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
            login
        };
        console.log('Form submitted:', formDataToLog);
        sendDataToServer(formDataToLog);
        setShowModalSend(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getAuthToken = async () => {
        try {
            const requestData = {
                apiToken: 'Xrefullx',
            };
            const response = await axios.post('http://localhost:8080/api/auth', requestData);
            return response.data.token;
        } catch (error) {
            console.error('Error while fetching auth token:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = localStorage.getItem('token');

                if (!token) {
                    token = await getAuthToken();
                    localStorage.setItem('token', token);
                }

                const requestData = {
                    login: login
                };

                if (typeof login === 'object' && login.hasOwnProperty('login')) {
                    requestData.login = login.login;
                }

                const response = await axios.post('http://localhost:8080/api/textServer', requestData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (response.data.data && response.data.data.length > 0) {
                    const obstanovkaInput = response.data.data[0].obstanovkaInput;
                    const monthInput = response.data.data[0].monthInput;

                    setInputData({
                        obstanovkaInput: obstanovkaInput,
                        monthInput: monthInput
                    });
                } else {
                    console.log('No data received from server');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <button className="button-exit" type="button" onClick={handleLogout} >
                    Выход
                </button>
                {showModal && (
                    <div className="modal">
                        <p>Точно выйти?</p>
                        <button onClick={handleConfirmLogout}>Да</button>
                        <button onClick={handleCancelLogout}>Отмена</button>
                    </div>
                )}
            </div>
            <div className="text-center">
                <label htmlFor="obstanovkaInput" style={{ color: 'white' }}>ОБСТАНОВКА В В/Ч   </label>
                <input className="input-text"
                       type="text"
                       id="obstanovkaInput"
                       name="obstanovkaInput"
                       value={inputData.obstanovkaInput}
                       readOnly
                />
            </div>

            <div className="text-center ">
                <label htmlFor="monthInput" style={{ color: 'white' }}>на </label>
                <input className="input-text"
                       type="text"
                       id="monthInput"
                       name="monthInput"
                       value={inputData.monthInput}
                       readOnly
                />
            </div>
        <div className="centered-tables"  >
            <LeadershipTableComponentReed
                login={login}
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
            <WorkingGroupsTableComponentReed
                login={login}
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
            <div>
                <button className="submit-button" type="button" onClick={handleSend}>
                    Отправить
                </button>
                {showModalSend && (
                    <div className="modal">
                        <p>Вы уверены в введенных данных?</p>
                        <button onClick={handleSubmit}>Да</button>
                        <button onClick={handleCancelSend}>Отмена</button>
                    </div>
                )}
            </div>
        </div>
        </div>

    );
}

export default ParticipantPage;
