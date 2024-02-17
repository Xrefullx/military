import React, {useEffect, useState} from 'react';
import axios from "axios";

const InternshipsTableComponent  = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table5')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>4. Военнослужащие воинской части</p>
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
                                     readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="FIOStarshy"
                                    value={rowData.FIOStarshy}
                                     readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TypeOfPractice"
                                    value={rowData.TypeOfPractice}
                                     readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DatesAndVenue"
                                    value={rowData.DatesAndVenue}
                                     readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="QuantityOfLs4"
                                    value={rowData.QuantityOfLs4}
                                     readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="AdditionalInformation"
                                    value={rowData.AdditionalInformation}
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

export default InternshipsTableComponent;