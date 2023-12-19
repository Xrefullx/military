import React from 'react';

const DataOnPersonnelOnBusinessTrips  = ({ tableData, handleRowChange,handleSubmit,setTableData,removeRow,addRow }) => {
    return (
        <div className="table-container">
            <p>5. Данные о личном составе, находящемся в командировках за пределами ППД, караулах и командах по сопровождению воинских грузов: </p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение (организация)</th>
                        <th>ФИО (старший)</th>
                        <th>Цель командировки, основание</th>
                        <th>Сроки, место проведения</th>
                        <th>Кол-во л/с</th>
                        <th>Доп. информация(убытие, возвращение, место проживания)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="event"
                                    value={rowData.DivisionOrganizationTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDates"
                                    value={rowData.FIOStarshyTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.ThePurposeOfTheBusinessTripTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.DatesAndVenueTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.QuantityOfLsTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.AdditionalInformationTable5}
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

export default DataOnPersonnelOnBusinessTrips;