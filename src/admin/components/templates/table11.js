import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheCallForANewReplenishment = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table11')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>11.	В период призыва нового пополнения: данные о командах с новым пополнением, находящихся в движении и прибывших за текущие сутки, данные о планируемом приведении к присяге:</p>
            <form>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Старший команды</th>
                        <th>Количество л/с</th>
                        <th>Маршрут следования</th>
                        <th>Сроки движения</th>
                        <th>Дата приведения к присяге</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="SeniorTeam"
                                    value={rowData.SeniorTeam}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="CountPeople"
                                    value={rowData.CountPeople}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheRouteOfTheRoute"
                                    value={rowData.TheRouteOfTheRoute}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheTimingOfTheMovement"
                                    value={rowData.TheTimingOfTheMovement}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="DateOfSwearingIn"
                                    value={rowData.DateOfSwearingIn}
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

export default TheCallForANewReplenishment;