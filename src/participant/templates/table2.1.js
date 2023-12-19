import React from 'react';

const TrainingTableComponent = ({ tableData, setTableData, handleRowChange, addRow, removeRow,handleSubmit }) => {
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
                                    name="event"
                                    value={rowData.event2}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDates"
                                    value={rowData.eventDates2}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.eventDetails2}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.personnelCount2}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            {index !== 0 && (
                                <td className="input-cell">
                                    <button
                                        type="button"
                                        className="delete-button"
                                        onClick={() => removeRow(tableData, setTableData, index)}
                                    >
                                        Удалить строку
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button type="button" onClick={() => addRow(setTableData)}>
                    Добавить строку
                </button>
            </form>
        </div>
    );
};

export default TrainingTableComponent;
