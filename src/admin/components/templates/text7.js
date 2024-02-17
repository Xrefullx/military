import React, {useEffect, useState} from 'react';
import './templatesCss.css';
import axios from "axios";

const StateOfLawAndOrderAndMilitaryDiscipline = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/text7')
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
                    7.  Состояние правопорядка и воинской дисциплины, криминогенной обстановки в районе дислокации воинской части
                    <input
                        type="text"
                        name="StateOfLawAndOrderAndMilitaryDiscipline"
                        value={tableData.StateOfLawAndOrderAndMilitaryDiscipline}
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

export default StateOfLawAndOrderAndMilitaryDiscipline;

