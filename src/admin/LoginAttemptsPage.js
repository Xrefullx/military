import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link,useHistory} from "react-router-dom";


function LoginAttemptsPage({ match }) {
    const userId = match.params.userId;
    const history = useHistory();
    const [loginAttempts, setLoginAttempts] = useState([]);
    const handleConfirmLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleConfirmBack = () => {
        localStorage.clear();
        history.push('/admin'); // Перенаправление на URL /admin
    };


    useEffect(() => {
        const fetchLoginAttempts = async () => {
            try {
                const token = localStorage.getItem('token');
                const historyResponse = await axios.get(`http://localhost:8080/api/history/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (historyResponse.data && Array.isArray(historyResponse.data.loginAttempts)) {
                    setLoginAttempts(historyResponse.data.loginAttempts);
                } else {
                    console.error('Invalid data format received for login attempts:', historyResponse.data);
                }
            } catch (error) {
                console.error('Error fetching login attempts:', error);
            }
        };

        fetchLoginAttempts();
    }, [userId]);

    return (
        <div>
            <h3>История попыток входа</h3>
            <div>
                <button onClick={handleConfirmLogout}>Выйти</button>
                <table className="user-table">
                    <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Открыть ответ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loginAttempts.map(user => (
                        <tr key={user.idnum}>
                            <td>{user.s_date}</td>
                            <td>
                                <button>
                                    <Link to={`/history/${user.idnum}`} className="button-link">
                                        Посмотреть историю ответов
                                    </Link>
                                </button>
                            </td>
                            <td>Был</td>
                            <td><button>Задать</button></td>
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
