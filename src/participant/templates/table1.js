import React from 'react';

const LeadershipTableComponent = ({tableData,setTableData, handleRowChange, addRow,handleSubmit,removeRow }) => {
    return (
        <div className="table-container">
            <p>1. Информация по руководящему составу:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Начальник</th>
                        <th>Зам. начальника</th>
                        <th>Зам. начальника по УНР</th>
                        <th>Зам. начальника по вооружению</th>
                        <th>Зам. начальника по тылу</th>
                        <th>Зам. начальника по ВПР</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="chief"
                                    value={rowData.chief}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="deputyChief"
                                    value={rowData.deputyChief}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="deputyChiefUNR"
                                    value={rowData.deputyChiefUNR}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="deputyChiefArmament"
                                    value={rowData.deputyChiefArmament}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="deputyChiefRear"
                                    value={rowData.deputyChiefRear}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="deputyChiefVPR"
                                    value={rowData.deputyChiefVPR}
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

export default LeadershipTableComponent;
