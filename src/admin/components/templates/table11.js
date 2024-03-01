import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheCallForANewReplenishmentReed = ({ id_answer }) => {
    const [user, setTableData] = useState([]);

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

                const response = await axios.get(`http://localhost:8080/api/table11/${id_answer}`, {
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
        <div className="table-container">
            <p style={{ color: 'white' }}>11.	В период проведения стажировки: данные о командах со стажирующимися, находящихся в
                движении и прибывших за текущие сутки: </p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Старший команды</th>
                        <th>Количество л/с</th>
                        <th>Маршрут следования</th>
                        <th>Сроки движения</th>
                        <th>Дата окончания обучения</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="SeniorTeam"
                                    value={rowData.SeniorTeam}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="CountPeople"
                                    value={rowData.CountPeople}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheRouteOfTheRoute"
                                    value={rowData.TheRouteOfTheRoute}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheTimingOfTheMovement"
                                    value={rowData.TheTimingOfTheMovement}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DateOfSwearingIn"
                                    value={rowData.DateOfSwearingIn}
                                    readOnly 
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default TheCallForANewReplenishmentReed;