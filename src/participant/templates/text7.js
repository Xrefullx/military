import React from 'react';
import './templatesCss.css';

const StateOfLawAndOrderAndMilitaryDiscipline = ({ formData, handleChange }) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan="8" className="energy-deviation-row">
                    7.  Состояние правопорядка и воинской дисциплины, криминогенной обстановки в районе дислокации воинской части
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

