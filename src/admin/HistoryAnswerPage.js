import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import '../participant/styles.css';
import LeadershipTableComponentReed from "../admin/components/templates/table1";
import axios from "axios";
import WorkingGroupsTableComponentReed from "../admin/components/templates/table4";
import TableComponentReed from "./components/templates/table2";
import TrainingTableComponentReed from "./components/templates/table2.1";
import InternshipsTableComponentReed from "./components/templates/table5";
import DataOnPersonnelOnBusinessTripsReed from "./components/templates/table6";
import EnergyDeviationRowReed from "./components/templates/text6";
import StateOfLawAndOrderAndMilitaryDisciplineReed from "./components/templates/text7";
import InformationAboutOfficialsReed from "./components/templates/text8";
import RotatedTableComponentReed from "./components/templates/table9";
import CadetsOfTheBranchReed from "./components/templates/table9.1";
import ThePeriodOfAdmissionOfApplicantsReed from "./components/templates/table10";
import TheCallForANewReplenishmentReed from "./components/templates/table11";
import TheTeamsThatArrivedReed from "./components/templates/table12";
import InformationAboutMilitaryPersonnelOfTheAcademyReed from "./components/templates/table13";


function HistoryAnswerPage({ id_answer }) {

    const [inputData, setInputData] = useState({
        obstanovkaInput: '',
        monthInput: ''
    });

    const history = useHistory();

    const handleConfirmLogout = () => {
        history.push(`/admin`);
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

                const response = await axios.get(`http://localhost:8080/api/textServer/${id_answer}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
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
                <button className="button-exit" type="button" onClick={handleConfirmLogout} >
                    Назад
                </button>
            </div>
            <div className="text-center">
                <label htmlFor="obstanovkaInput" style={{ color: 'white' }}>ОБСТАНОВКА НА ОБЪЕКТЕ №   </label>
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
                id_answer={id_answer}
            />
            <TableComponentReed
                id_answer={id_answer}
            />
            <TrainingTableComponentReed
                id_answer={id_answer}
            />
            <WorkingGroupsTableComponentReed
                id_answer={id_answer}
            />
            <InternshipsTableComponentReed
                id_answer={id_answer}
            />
            <DataOnPersonnelOnBusinessTripsReed
                id_answer={id_answer}
            />
            <EnergyDeviationRowReed
                id_answer={id_answer}
            />
            <StateOfLawAndOrderAndMilitaryDisciplineReed
                id_answer={id_answer}
            />
            <InformationAboutOfficialsReed
                id_answer={id_answer}
            />
            <RotatedTableComponentReed
                id_answer={id_answer}
            />
            <CadetsOfTheBranchReed
                id_answer={id_answer}
            />
            <ThePeriodOfAdmissionOfApplicantsReed
                id_answer={id_answer}
            />
            <TheCallForANewReplenishmentReed
                id_answer={id_answer}
            />
            <TheTeamsThatArrivedReed
                id_answer={id_answer}
            />
            <InformationAboutMilitaryPersonnelOfTheAcademyReed
                id_answer={id_answer}
            />
        </div>
        </div>

    );
}

export default HistoryAnswerPage;
