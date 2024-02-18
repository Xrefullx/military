import React from 'react';

const WorkingGroupsTableComponent = ({ tableData,setTableData, handleRowChange, addRow,handleSubmit,removeRow  }) => {
    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>3. Работа групп (комиссий) от вышестоящих органов управления, кооперации промышленности и представителей воинских частей других видов и родов ВС РФ:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Направление деятельности</th>
                        <th>Сроки, место</th>
                        <th>Состав</th>
                        <th>Кол-во л/с</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheFieldOfActivity"
                                    value={rowData.TheFieldOfActivity}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="datesLocation"
                                    value={rowData.datesLocation}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="positionTitle"
                                    value={rowData.positionTitle}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="kolVoLS"
                                    value={rowData.kolVoLS}
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

export default WorkingGroupsTableComponent;
