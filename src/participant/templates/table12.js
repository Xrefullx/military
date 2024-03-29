import React from 'react';

const TheTeamsThatArrived = ({ tableData, setTableData, handleRowChange, addRow, removeRow, handleSubmit }) => {
    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>12. Прибывшие на объект команды: </p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение (организация)</th>
                        <th>ФИО (старший)</th>
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
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIO"
                                    value={rowData.FIO}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="PurposeOfArrival"
                                    value={rowData.PurposeOfArrival}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Deadlines"
                                    value={rowData.Deadlines}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="CountPeople"
                                    value={rowData.CountPeople}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Note"
                                    value={rowData.Note}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            {index !== 0 && (
                                <td className="input-cell">
                                    <button
                                        type="button"
                                        className="delete-button"
                                        onClick={() => removeRow(tableData, setTableData,index)}
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

export default TheTeamsThatArrived;