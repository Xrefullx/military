import React, {useEffect, useState} from 'react';
import axios from "axios";

const DataOnPersonnelOnBusinessTrips  = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table6')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
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
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIOStarshyTable5"
                                    value={rowData.FIOStarshyTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="ThePurposeOfTheBusinessTripTable5"
                                    value={rowData.ThePurposeOfTheBusinessTripTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DatesAndVenueTable5"
                                    value={rowData.DatesAndVenueTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="QuantityOfLsTable5"
                                    value={rowData.QuantityOfLsTable5}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="AdditionalInformationTable5"
                                    value={rowData.AdditionalInformationTable5}
                                    readOnly 
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default DataOnPersonnelOnBusinessTrips;