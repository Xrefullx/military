import React, {useEffect, useState} from 'react';
import axios from "axios";


const TableComponentReed = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table2')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    
    return (
        <div className="table-container">
            <p>2. Основные мероприятия, запланированные на текущие сутки:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Мероприятие</th>
                        <th>Сроки</th>
                        <th>Должность, звание, Ф.И.О., мероприятие</th>
                        <th>Кол-во л/с</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="event"
                                    value={rowData.event}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDates"
                                    value={rowData.eventDates}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.eventDetails}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.personnelCount}
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

export default TableComponentReed;
