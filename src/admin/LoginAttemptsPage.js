import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom";


function LoginAttemptsPage({ match }) {
    const userId = match.params.userId;
    const history = useHistory();
    const [users, setLoginAttempts] = useState([]);
    const handleConfirmLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleConfirmBack = () => {
        localStorage.clear();
        history.push('/admin'); // Перенаправление на URL /admin
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
        const fetchLoginAttempts = async () => {
            try {
                let token = localStorage.getItem('token');

                if (!token) {
                    token = await getAuthToken();
                    localStorage.setItem('token', token);
                }

                const historyResponse = await axios.get(`http://localhost:8080/api/history/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (historyResponse.data && Array.isArray(historyResponse.data.data)) {
                    setLoginAttempts(historyResponse.data.data);
                } else {
                    console.error('Invalid data format received for login attempts:', historyResponse.data);
                }
            } catch (error) {
                console.error('Error fetching login attempts:', error);
            }
        };

        fetchLoginAttempts();
    }, [userId]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <div>
                <h3 style={{ color: 'white', textAlign: 'center', fontSize: '30px' }}>История попыток входа</h3>
            </div>
            <div>
                <button onClick={handleConfirmLogout}>Выйти</button>
                <table className="user-table">
                    <thead>
                    <tr>
                        <th>Дата получения задания</th>
                        <th>Дата ответа на задание</th>
                        <th>Открыть ответ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.idnum}>
                            <td>{formatDate(user.d_create)}</td>
                            <td>{formatDate(user.d_finish)}</td>

                            <td>
                                <button>
                                    <Link to={`/Answerhistory/${user.id_answer}`} className="button-link">
                                        Посмотреть ответ
                                    </Link>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <button onClick={handleConfirmBack}>Назад</button>
        </div>

    );
}

export default LoginAttemptsPage;
