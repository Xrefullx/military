import React, { useState, useEffect } from 'react';
import './templatesCss.css';
import axios from "axios";

const EnergyDeviationRow = ({ formData, handleChange }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/text6')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <table>
            <tbody>
            {tableData.map((rowData, index) => (
                <tr key={index}>
                <td colSpan="8" className="energy-deviation-row">
                    6.    Отклонения тепло
                    <input
                        type="text"
                        name="energyDeviationHeat"
                        value={tableData.energyDeviationHeat}
                        readOnly
                        className="input-field"
                    />,
                    водо
                    <input
                        type="text"
                        name="energyDeviationWater"
                        value={tableData.energyDeviationWater}
                        readOnly
                        className="input-field"
                    />и
                    энергоснабжения
                    <input
                        type="text"
                        name="energyDeviationPower"
                        value={tableData.energyDeviationPower}
                        readOnly
                        className="input-field"
                    />
                </td>
            </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EnergyDeviationRow;

