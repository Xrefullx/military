import React from 'react';
import './templatesCss.css';

const RotatedTableComponent  = ({ formData,handleSubmit,setFormData }) => {
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (/^\d*$/.test(value)) {
            setFormData((prevData) => {
                let newFormData = {
                    ...prevData,
                    [name]: parseInt(value, 10) || 0, // Преобразуем строку в число, убеждаемся, что NaN превращается в 0
                };

                // Автоматически вычисляем необходимые поля
                newFormData.dayTotal = newFormData.dayORZ + newFormData.dayPneumonia;
                newFormData.soldiersHospitalTotal = newFormData.soldiersHospitalORZ + newFormData.soldiersHospitalPneumonia;
                newFormData.cadetsHospitalTotal = newFormData.cadetsHospitalORZ + newFormData.cadetsHospitalPneumonia;
                newFormData.soldiersStationaryTotal = newFormData.soldiersORZ + newFormData.soldiersPneumonia;
                newFormData.cadetsStationaryTotal = newFormData.cadetsORZ + newFormData.cadetsPneumonia;
                newFormData.totalORZ =
                    newFormData.dayORZ +
                    newFormData.soldiersHospitalORZ +
                    newFormData.cadetsHospitalORZ +
                    newFormData.soldiersORZ +
                    newFormData.cadetsORZ;

                newFormData.totalPneumonia =
                    newFormData.dayPneumonia +
                    newFormData.soldiersHospitalPneumonia +
                    newFormData.cadetsHospitalPneumonia +
                    newFormData.soldiersPneumonia +
                    newFormData.cadetsPneumonia;

                newFormData.totalTotal = newFormData.totalORZ + newFormData.totalPneumonia;

                return newFormData;
            });
        }
    };

    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>9.	Данные о заболеваемости личного состава</p>
            <form onSubmit={handleSubmit}>
        <table className="table">
            <thead className="thead-style">
            <tr>
                <td className="cell-style" rowSpan="3"></td>
                <td colSpan="3" rowSpan="2">Поступило за сутки</td>
                <td colSpan="6" >Госпиталь</td>
                <td colSpan="6" >Стационар</td>
                <td colSpan="3" >Итого</td>
            </tr>
            <tr>
                <td colSpan="3" >Мужчины</td>
                <td colSpan="3" >Женщины</td>
                <td colSpan="3" >Мужчины</td>
                <td colSpan="3">Женщины</td>
                <td colSpan="3"></td>
            </tr>
            <tr>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
                <td className="header-cell9">Всего</td>
                <td className="header-cell9">ОРЗ</td>
                <td className="header-cell9">Пневмония</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="thead-style">РВСН </td>
                <td className="input-cell9">
                    <input type="number" name="dayTotal" value={formData.dayTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayORZ" value={formData.dayORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayPneumonia" value={formData.dayPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>

                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalTotal" value={formData.soldiersHospitalTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalORZ" value={formData.soldiersHospitalORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalPneumonia" value={formData.soldiersHospitalPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>

                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalTotal" value={formData.cadetsHospitalTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalORZ" value={formData.cadetsHospitalORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalPneumonia" value={formData.cadetsHospitalPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersStationaryTotal" value={formData.soldiersStationaryTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersORZ" value={formData.soldiersORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersPneumonia" value={formData.soldiersPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsStationaryTotal" value={formData.cadetsStationaryTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsORZ" value={formData.cadetsORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsPneumonia" value={formData.cadetsPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalStationaryTotal" value={formData.totalTotal} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalORZ" value={formData.totalORZ} onChange={handleChange} pattern="[0-9]*" />
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalPneumonia" value={formData.totalPneumonia} onChange={handleChange} pattern="[0-9]*" />
                </td>
            </tr>
            </tbody>
            </table>
            </form>
        </div>
    );
};

export default RotatedTableComponent ;

