import React from 'react';


const CadetsOfTheBranch = ({ tableData, setTableData, handleRowChange, addRow, removeRow, handleSubmit }) => {

    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>Военнослужащие филиала, находящиеся на стационарном лечении в медицинских учреждениях вне:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>№ п/п</th>
                        <th>В/звание, подразделение</th>
                        <th>Фамилия, имя, отчество</th>
                        <th>Обстоятельства</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                {index + 1}
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="MilitaryRank"
                                    value={rowData.MilitaryRank}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="PeopleName"
                                    value={rowData.PeopleName}
                                    onChange={(e) => handleRowChange(e, index, setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Circumstances"
                                    value={rowData.Circumstances}
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

export default CadetsOfTheBranch;
