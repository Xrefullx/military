import React, {useEffect, useState} from 'react';
import axios from "axios";

const DataOnPersonnelOnBusinessTripsReed  = ({ id_answer }) => {
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

                const response = await axios.get(`http://localhost:8080/api/table6/${id_answer}`, {
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
            <p style={{ color: 'white' }}>5. Данные о личном составе, находящемся в командировке : </p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение (организация)</th>
                        <th>ФИО (старший)</th>
                        <th>Цель командировки, основание</th>
                        <th>Сроки, место проведения</th>
                        <th>Кол-во л/с</th>
                        <th>Доп. информация(убытие, возвращение, место проживания)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DivisionOrganizationTable5"
                                    value={rowData.DivisionOrganizationTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIOStarshyTable5"
                                    value={rowData.FIOStarshyTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="ThePurposeOfTheBusinessTripTable5"
                                    value={rowData.ThePurposeOfTheBusinessTripTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DatesAndVenueTable5"
                                    value={rowData.DatesAndVenueTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="QuantityOfLsTable5"
                                    value={rowData.QuantityOfLsTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="AdditionalInformationTable5"
                                    value={rowData.AdditionalInformationTable5}
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

export default DataOnPersonnelOnBusinessTripsReed;