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
                                    name="DivisionOrganizationTable5"
                                    value={rowData.DivisionOrganizationTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIOStarshyTable5"
                                    value={rowData.FIOStarshyTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="ThePurposeOfTheBusinessTripTable5"
                                    value={rowData.ThePurposeOfTheBusinessTripTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DatesAndVenueTable5"
                                    value={rowData.DatesAndVenueTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="QuantityOfLsTable5"
                                    value={rowData.QuantityOfLsTable5}
                                    onChange={(e) => handleRowChange(e, index,setTableData)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="AdditionalInformationTable5"
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