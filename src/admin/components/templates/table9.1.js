import React, {useEffect, useState} from 'react';
import axios from "axios";


const CadetsOfTheBranchReed = ({ id_answer }) => {
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

                const response = await axios.get(`https://dynamicforces.ru/api/table91/${id_answer}`, {
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
            <p style={{ color: 'white' }}>Люди, находящиеся на стационарном лечении в медицинских учреждениях вне объекта:</p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>№ п/п</th>
                        <th>Подразделение</th>
                        <th>Фамилия, имя, отчество</th>
                        <th>Обстоятельства</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.map((rowData, index) => (
                        <tr key={index}>
                            <td style={{ color: 'white' }} className="input-cell">
                                {index + 1}
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="MilitaryRank"
                                    value={rowData.MilitaryRank}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="PeopleName"
                                    value={rowData.PeopleName}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Circumstances"
                                    value={rowData.Circumstances}
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

export default CadetsOfTheBranchReed;
