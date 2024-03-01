import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThePeriodOfAdmissionOfApplicantsReed = ({ id_answer }) => {
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

                const response = await axios.get(`http://localhost:8080/api/table10/${id_answer}`, {
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
            <p style={{ color: 'white' }}>10.	В период поступления стажирующихся, доклад по всем мероприятиям и особенностям данного
                периода:</p>
            <form>
                <table className="table">
                    <thead className="thead-style">
                    <tr>
                        <td rowSpan="2">План набора</td>
                        <td colSpan="4">Фактическое наличие</td>
                        <td rowSpan="2">Примечание</td>
                    </tr>
                    <tr>
                        <td>всего</td>
                        <td>Юристы</td>
                        <td>Инженеры</td>
                        <td>Строители</td>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="recruitmentPlan"
                                    value={rowData.recruitmentPlan}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="inTotal"
                                    value={rowData.inTotal}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheMilitaryPersonnel"
                                    value={rowData.fromAmongTheMilitaryPersonnel}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheCadets"
                                    value={rowData.fromAmongTheCadets}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.fromAmongTheGP}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.Note}
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

export default ThePeriodOfAdmissionOfApplicantsReed;