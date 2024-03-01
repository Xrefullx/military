import React from 'react';
import './templatesCss.css';

const StateOfLawAndOrderAndMilitaryDiscipline = ({ formData, handleChange }) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan="8" className="energy-deviation-row" style={{ color: 'white' }}>
                    7.  Состояние правопорядка и воинской дисциплины, криминогенной обстановки в районе дислокации объекта
                    <input
                        type="text"
                        name="StateOfLawAndOrderAndMilitaryDiscipline"
                        value={formData.StateOfLawAndOrderAndMilitaryDiscipline}
                        onChange={handleChange}
                        className="input-field"
                    />
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default StateOfLawAndOrderAndMilitaryDiscipline;

