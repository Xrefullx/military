import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import axios from 'axios';

import './AdminPage.css'
import LoginAttemptsPage from "./LoginAttemptsPage";
import WorkingGroupsTableComponent from "../participant/templates/table4";
import LeadershipTableComponent from "../participant/templates/table1";
import {useInitialFormData} from "../participant/utils/formData";
import {addRow, addRow10, addRow9} from "../participant/utils/addRow";
import {removeRow10, removeRow2, removeRow9} from "../participant/utils/removeRow";
import {handleRowChange, handleRowChange10, handleRowChange9} from "../participant/utils/changeRow";

function AdminPage({ login,setIsAdmin, isAdmin }) {
    const { formData, setFormData,
        setTableData9,tableData9,
        setTableData10,tableData10} = useInitialFormData();
    const [users, setUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentScreen, setCurrentScreen] = useState(1);
    const totalScreens = 3;
    const [showModal, setShowModal] = useState(false);
    const [showModalSend, setShowModalSend] = useState(false);
    const [userIdnum, setUserIdnum] = useState(null);

    const handleConfirmLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

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

    const refreshToken = async () => {
        try {
            const newToken = await getAuthToken();
            localStorage.setItem('token', newToken);
            return newToken;
        } catch (error) {
            console.error('Error refreshing token:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = localStorage.getItem('token');
                if (!token) {
                    try {
                        token = await getAuthToken();
                        localStorage.setItem('token', token);
                    } catch (tokenError) {
                        console.error('Error getting token:', tokenError);
                        return;
                    }
                }

                const usersResponse = await axios.get('https://dynamicforces.ru/api/getUsers', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (usersResponse.data && Array.isArray(usersResponse.data.users)) {
                    setUsers(usersResponse.data.users);
                } else {
                    console.error('Invalid data format received from the server:', usersResponse.data);
                }

            } catch (fetchError) {
                console.error('Error fetching users:', fetchError);

                if (fetchError.response && fetchError.response.status === 401) {
                    try {
                        let token;
                        token = await refreshToken();
                        localStorage.setItem('token', token);

                        const retryResponse = await axios.get('https://dynamicforces.ru/api/getUsers', {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });

                        if (retryResponse.data && Array.isArray(retryResponse.data.users)) {
                            setUsers(retryResponse.data.users);
                        } else {
                            console.error('Invalid data format received from the server:', retryResponse.data);
                        }

                    } catch (retryError) {
                        console.error('Error refreshing token or retrying request:', retryError);
                        alert('Неправильный логин или пароль!');
                    }
                }
            }
        };

        fetchData();
    }, []);

    const openModal = (idnum) => {
        setUserIdnum(idnum);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToLog = {
            formData,
            tableData9,
            tableData10,
            login,
            userIdnum
        };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found in localStorage.');
                return;
            }

            const response = await axios.post('https://dynamicforces.ru/api/addTask', formDataToLog, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Data sent to server:', formDataToLog);
            setShowModalSend(false);
            setModalIsOpen(false);
        } catch (error) {
            if (error.response && error.response.status === 500) {
                alert('Заполните все поля');
            } else {
                console.error('Error sending data to server:', error);
            }
        }
    };


    const handleNextScreen = () => {
        setCurrentScreen((prevScreen) => (prevScreen === totalScreens ? 1 : prevScreen + 1));
    };

    const handlePrevScreen = () => {
        setCurrentScreen((prevScreen) => (prevScreen === 1 ? totalScreens : prevScreen - 1));
    };

    const handleSend = () => {
        setShowModalSend(true);
    };

    const handleCancelSend = () => {
        setShowModalSend(false);
    };

    return (
        <div>
            <button onClick={handleConfirmLogout}>Выйти</button>
            <table className="user-table">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Звание</th>
                    <th>История ответов</th>
                    <th>Ответ за последние сутки</th>
                    <th>Задать данные для ответа</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.idnum}>
                        <td>{user.s_fio}</td>
                        <td>{user.s_text}</td>
                        <td>
                            <button>
                                <Link to={`/history/${user.idnum}`} className="button-link">
                                    Посмотреть историю ответов
                                </Link>
                            </button>
                        </td>
                        <td className={user.has_entry_last_24h === "1" ? 'green-text' : 'red-text'}>
                            {user.has_entry_last_24h === "1" ? 'Был' : 'Не был'}
                        </td>
                        <td>
                            <button onClick={() => openModal(user.idnum)}>Задать</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="modal-content">
                    <div>
                        <button onClick={closeModal}>Закрыть</button>
                    </div>
                    <div>
                        {currentScreen === 1 && (
                            <>
                                <h2>Этап 1</h2>
                                <div className="text-center">
                                    <label htmlFor="obstanovkaInput">ОБСТАНОВКА В В/Ч</label>
                                    <input
                                        className="input-text"
                                        type="text"
                                        id="obstanovkaInput"
                                        name="obstanovkaInput"
                                        value={formData.obstanovkaInput}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="text-center">
                                    <label htmlFor="monthInput">на </label>
                                    <input
                                        className="input-text"
                                        type="text"
                                        id="monthInput"
                                        name="monthInput"
                                        value={formData.monthInput}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        {currentScreen === 2 && (
                            <>
                                <h2>Этап 2</h2>
                                <LeadershipTableComponent
                                    tableData={tableData9}
                                    setTableData={setTableData9}
                                    handleRowChange={handleRowChange9}
                                    addRow={addRow9}
                                    removeRow={removeRow9}
                                    handleSubmit={handleSubmit}
                                />
                            </>
                        )}

                        {currentScreen === 3 && (
                            <>
                                <h2>Этап 3</h2>
                                <WorkingGroupsTableComponent
                                    tableData={tableData10}
                                    setTableData={setTableData10}
                                    handleRowChange={handleRowChange10}
                                    addRow={addRow10}
                                    removeRow={removeRow10}
                                    handleSubmit={handleSubmit}
                                />
                            </>
                        )}
                    </div>

                    <div style={{textAlign: 'center', marginTop: '20px'}}>
                        <button onClick={handlePrevScreen}>&larr; Предыдущий</button>
                        <span style={{margin: '0 10px'}}>Экран {currentScreen}</span>
                        <button onClick={handleNextScreen}>Следующий &rarr;</button>
                    </div>
                </div>
                <button className="submit-button" type="button" onClick={handleSend}>
                    Отправить
                </button>
                {showModalSend && (
                    <div className="modal">
                        <p>Вы уверены в введенных данных?</p>
                        <button onClick={handleSubmit}>Да</button>
                        <button onClick={handleCancelSend}>Отмена</button>
                    </div>
                )}
            </Modal>

        </div>
    );
}

export default AdminPage;
