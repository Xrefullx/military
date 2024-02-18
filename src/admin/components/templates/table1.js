import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadershipTableComponentReed = ({ login }) => {
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

                const requestData = {
                    login: login
                };

                if (typeof login === 'object' && login.hasOwnProperty('login')) {
                    requestData.login = login.login;
                }

                const response = await axios.post('http://localhost:8080/api/table1', requestData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });

                setTableData(response.data.user); // Обновляем state с данными пользователя
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [login]);

    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>1. Информация по руководящему составу:</p>
            <table className="table">
                <thead>
                <tr>
                    <th>Начальник</th>
                    <th>Зам. начальника</th>
                    <th>Зам. начальника по УНР</th>
                    <th>Зам. начальника по вооружению</th>
                    <th>Зам. начальника по тылу</th>
                    <th>Зам. начальника по ВПР</th>
                </tr>
                </thead>
                <tbody>
                {user.map((rowData, index) => (
                    <tr key={index}>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="chief"
                                value={rowData.chief}
                                readOnly
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChief"
                                value={rowData.deputyChief}
                                readOnly
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefUNR"
                                value={rowData.deputyChiefUNR}
                                readOnly
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefArmament"
                                value={rowData.deputyChiefArmament}
                                readOnly
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefRear"
                                value={rowData.deputyChiefRear}
                                readOnly
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefVPR"
                                value={rowData.deputyChiefVPR}
                                readOnly
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadershipTableComponentReed;
