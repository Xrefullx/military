import React from 'react';

const InternshipsTableComponent  = ({ tableData, handleRowChange,handleSubmit,setTableData,removeRow,addRow }) => {
    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>4. Стажировки (практики) гражданских лиц из числа студентов федеральных государственных образовательных организаций высшего образования: </p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение (организация)</th>
                        <th>ФИО (старший)</th>
                        <th>Вид практики</th>
                        <th>Сроки, место проведения</th>
                        <th>Кол-во л/с</th>
                        <th>Доп. информация</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DivisionOrganization"
                                    value={rowData.DivisionOrganization}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIOStarshy"
                                    value={rowData.FIOStarshy}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TypeOfPractice"
                                    value={rowData.TypeOfPractice}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DatesAndVenue"
                                    value={rowData.DatesAndVenue}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="QuantityOfLs4"
                                    value={rowData.QuantityOfLs4}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="AdditionalInformation"
                                    value={rowData.AdditionalInformation}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            {index !== 0 && (
                                <td className="input-cell">
                                    <button type="button" className="delete-button" onClick={() => removeRow(tableData, setTableData,index)}>
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

export default InternshipsTableComponent;