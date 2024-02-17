import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheTeamsThatArrived = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table12')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>12. Прибывшие в воинскую часть</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение (организация)</th>
                        <th>Количество л/с</th>
                        <th>Цель прибытия</th>
                        <th>Сроки</th>
                        <th>Кол-во л/с</th>
                        <th>Примечание</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
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
                                    name="FIO"
                                    value={rowData.FIO}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="PurposeOfArrival"
                                    value={rowData.PurposeOfArrival}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Deadlines"
                                    value={rowData.Deadlines}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="CountPeople"
                                    value={rowData.CountPeople}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Note"
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

export default TheTeamsThatArrived;