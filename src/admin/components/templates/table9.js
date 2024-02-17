import React, {useEffect, useState} from 'react';
import './templatesCss.css';
import axios from "axios";

const RotatedTableComponent  = ({ formData,handleSubmit,setFormData }) => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table9')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);

    return (
        <div className="table-container">
            <p>9.	Данные о заболеваемости личного состава, в том числе новой короновирусной инфекции:</p>
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
                <td colSpan="3" >Солдаты</td>
                <td colSpan="3" >Военнослужащие</td>
                <td colSpan="3" >Солдаты</td>
                <td colSpan="3">Военнослужащие</td>
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
            {tableData.map((rowData, index) => (
                <tr key={index}>
                <td className="thead-style">РВСН </td>
                <td className="input-cell9">
                    <input type="number" name="dayTotal" value={formData.dayTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayORZ" value={formData.dayORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayPneumonia" value={formData.dayPneumonia} readOnly/>
                </td>

                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalTotal" value={formData.soldiersHospitalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalORZ" value={formData.soldiersHospitalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalPneumonia" value={formData.soldiersHospitalPneumonia} readOnly/>
                </td>

                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalTotal" value={formData.cadetsHospitalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalORZ" value={formData.cadetsHospitalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalPneumonia" value={formData.cadetsHospitalPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersStationaryTotal" value={formData.soldiersStationaryTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersORZ" value={formData.soldiersORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersPneumonia" value={formData.soldiersPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsStationaryTotal" value={formData.cadetsStationaryTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsORZ" value={formData.cadetsORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsPneumonia" value={formData.cadetsPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalStationaryTotal" value={formData.totalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalORZ" value={formData.totalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalPneumonia" value={formData.totalPneumonia} readOnly/>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
            </form>
        </div>
    );
};

export default RotatedTableComponent ;

