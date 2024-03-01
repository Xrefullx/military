import React, {useEffect, useState} from 'react';
import './templatesCss.css';
import axios from "axios";

const StateOfLawAndOrderAndMilitaryDisciplineReed = ({id_answer}) => {
    const [user, setTableData] = useState([]);

    const getAuthToken = async () => {
        try {
            const requestData = {
                apiToken: 'Xrefullx',
            };
            const response = await axios.post('https://dynamicforces.ru/api/auth', requestData);
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

                const response = await axios.get(`https://dynamicforces.ru/api/text7/${id_answer}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setTableData(response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <table>
            <tbody>
            {user.map((rowData, index) => (
                <tr key={index}>
                    <td colSpan="8" className="energy-deviation-row" style={{ color: 'white' }}>
                    7.  Состояние криминогенной обстановки в районе дислокации объекта:
                    <input
                        type="text"
                        name="StateOfLawAndOrderAndMilitaryDiscipline"
                        value={rowData.stateOfLawAndOrderAndMilitaryDiscipline}
                        readOnly
                        className="input-field"
                    />
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    );
};

export default StateOfLawAndOrderAndMilitaryDisciplineReed;

