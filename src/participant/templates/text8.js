import React from 'react';
import './templatesCss.css';

const InformationAboutOfficialsReed = ({ formData, handleChange }) => {
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan="8" className="energy-deviation-row" style={{ color: 'white' }}>
                    8.	Данные о должностных лицах, занимающих руководящие должности, находящиеся на излечении в медицинских учреждениях:
                    <input
                        type="text"
                        name="InformationAboutOfficials"
                        value={formData.InformationAboutOfficials}
                        onChange={handleChange}
                        className="input-field"
                    />
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default InformationAboutOfficialsReed;