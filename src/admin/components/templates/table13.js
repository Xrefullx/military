import React, {useEffect, useState} from 'react';
import axios from "axios";

const InformationAboutMilitaryPersonnelOfTheAcademyReed = ({ id_answer }) => {
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

                const response = await axios.get(`http://localhost:8080/api/table13/${id_answer}`, {
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
            <p style={{ color: 'white' }}>13. Сведения о работниках, находящихся за пределами города на личном транспорте:</p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение</th>
                        <th>На выезде</th>
                        <th>В пути</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Division"
                                    value={rowData.Division}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="OnTheRoad"
                                    value={rowData.OnTheRoad}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="OnTheWay"
                                    value={rowData.OnTheWay}
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

export default InformationAboutMilitaryPersonnelOfTheAcademyReed;