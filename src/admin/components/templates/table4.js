import React, {useEffect, useState} from 'react';
import axios from "axios";

const WorkingGroupsTableComponentReed = ({ id_answer }) => {
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

                const response = await axios.get(`https://dynamicforces.ru/api/table4/${id_answer}`, {
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
            <p style={{ color: 'white' }}>3. Работа групп (комиссий) от вышестоящих органов управления, кооперации промышленности и представителей других видов контроля:</p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Направление деятельности</th>
                        <th>Сроки, место</th>
                        <th>Состав</th>
                        <th>Кол-во л/с</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheFieldOfActivity"
                                    value={rowData.TheFieldOfActivity}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="datesLocation"
                                    value={rowData.datesLocation}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="positionTitle"
                                    value={rowData.positionTitle}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="kolVoLS"
                                    value={rowData.kolVoLS}
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

export default WorkingGroupsTableComponentReed;
