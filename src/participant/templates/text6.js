import React from 'react';
import './templatesCss.css';

const EnergyDeviationRow = ({ formData, handleChange }) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan="8" className="energy-deviation-row">
                    6.    Отклонения тепло
                    <input
                        type="text"
                        name="energyDeviationHeat"
                        value={formData.energyDeviationHeat}
                        onChange={handleChange}
                        className="input-field"
                    />,
                    водо
                    <input
                        type="text"
                        name="energyDeviationWater"
                        value={formData.energyDeviationWater}
                        onChange={handleChange}
                        className="input-field"
                    />и
                    энергоснабжения
                    <input
                        type="text"
                        name="energyDeviationPower"
                        value={formData.energyDeviationPower}
                        onChange={handleChange}
                        className="input-field"
                    />
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default EnergyDeviationRow;

