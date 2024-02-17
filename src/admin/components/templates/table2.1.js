import React, {useEffect, useState} from 'react';
import axios from "axios";

const TrainingTableComponentReed = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table2-1')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>Проведение занятий по огневой подготовке с личным составом:</p>
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
                                    name="event2"
                                    value={rowData.event2}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDates2"
                                    value={rowData.eventDates2}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails2"
                                    value={rowData.eventDetails2}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount2"
                                    value={rowData.personnelCount2}
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

export default TrainingTableComponentReed;
