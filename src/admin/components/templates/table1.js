import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeadershipTableComponentReed = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table1')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="table-container">
            <p>1. Информация по руководящему составу:</p>
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
                                readOnly 
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChief"
                                value={rowData.deputyChief}
                                readOnly 
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefUNR"
                                value={rowData.deputyChiefUNR}
                                readOnly 
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefArmament"
                                value={rowData.deputyChiefArmament}
                                readOnly 
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefRear"
                                value={rowData.deputyChiefRear}
                                readOnly 
                            />
                        </td>
                        <td className="input-cell">
                            <input
                                type="text"
                                name="deputyChiefVPR"
                                value={rowData.deputyChiefVPR}
                                readOnly 
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeadershipTableComponentReed;
