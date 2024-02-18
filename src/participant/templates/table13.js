import React from 'react';

const InformationAboutMilitaryPersonnelOfTheAcademy = ({ tableData, setTableData, handleRowChange, addRow, removeRow, handleSubmit }) => {
    return (
        <div className="table-container" style={{ color: 'white' }}>
            <p>13. Сведения о военнослужащих воинской части, находящихся за пределами гарнизона на личном транспорте:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение</th>
                        <th>На выезде</th>
                        <th>В пути</th>
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
                                    name="OnTheRoad"
                                    value={rowData.OnTheRoad}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="OnTheWay"
                                    value={rowData.OnTheWay}
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

export default InformationAboutMilitaryPersonnelOfTheAcademy;