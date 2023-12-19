import React from 'react';

const TheCallForANewReplenishment = ({ tableData, setTableData, handleRowChange, addRow, removeRow, handleSubmit }) => {
    return (
        <div className="table-container">
            <p>11.	В период призыва нового пополнения: данные о командах с новым пополнением, находящихся в движении и прибывших за текущие сутки, данные о планируемом приведении к присяге:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Старший команды</th>
                        <th>Количество л/с</th>
                        <th>Маршрут следования</th>
                        <th>Сроки движения</th>
                        <th>Дата приведения к присяге</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="SeniorTeam"
                                    value={rowData.SeniorTeam}
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
                                    name="TheRouteOfTheRoute"
                                    value={rowData.TheRouteOfTheRoute}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheTimingOfTheMovement"
                                    value={rowData.TheTimingOfTheMovement}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DateOfSwearingIn"
                                    value={rowData.DateOfSwearingIn}
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

export default TheCallForANewReplenishment;