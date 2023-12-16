import React from 'react';

const InternshipsTableComponent  = ({ tableData, handleRowChange,handleSubmit,setTableData,removeRow,addRow }) => {
    return (
        <div className="table-container">
            <p>4.Стажировки (практики) слушателей и курсантов ВА РВСН (ФВА РВСН) и других высших учебных заведений, сборы гражданских лиц из числа студентов федеральных государственных образовательных организаций высшего образования, обучающихся по программам военной подготовки: </p>
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
                                    name="event"
                                    value={rowData.DivisionOrganization}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDates"
                                    value={rowData.FIOStarshy}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.TypeOfPractice}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.DatesAndVenue}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.QuantityOfLs4}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
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