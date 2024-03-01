import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadershipTableComponentReed = ({ id_answer }) => {
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

                const response = await axios.get(`https://dynamicforces.ru/api/table1/${id_answer}`, {
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
            <p style={{ color: 'white' }}>1. Информация по руководящему составу:</p>
            <table className="table">
                <thead>
                <tr>
                    <th>Директор</th>
                    <th>Руководитель отдела</th>
                    <th>Ведущий специалист</th>
                    <th>Главный бухгалтер</th>
                    <th>Главный инженер</th>
                    <th>Инспектор по кадрам</th>
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
