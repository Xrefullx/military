import React, {useEffect, useState} from 'react';
import './templatesCss.css';
import axios from "axios";

const RotatedTableComponentReed  = ({ id_answer }) => {
    const [user, setuser] = useState([]);

    const getAuthToken = async () => {
        try {
            const requestData = {
                apiToken: 'Xrefullx',
            };
            const response = await axios.post('https://dynamicforces.ru/api/auth', requestData);
            return response.data.token;
        } catch (error) {
            console.error('Error while fetching auth token:', error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token = localStorage.getItem('token');

                if (!token) {
                    token = await getAuthToken();
                    localStorage.setItem('token', token);
                }

                const response = await axios.get(`https://dynamicforces.ru/api/table9/${id_answer}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setuser(response.data.user);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="table-container">
            <p style={{ color: 'white' }}>9.	Данные о заболеваемости личного состава:</p>
            <form>
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
            {user.map((rowData, index) => (
                <tr key={index}>
                <td className="thead-style">РВСН </td>
                <td className="input-cell9">
                    <input type="number" name="dayTotal" value={rowData.dayTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayORZ" value={rowData.dayORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="dayPneumonia" value={rowData.dayPneumonia} readOnly/>
                </td>

                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalTotal" value={rowData.soldiersHospitalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalORZ" value={rowData.soldiersHospitalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersHospitalPneumonia" value={rowData.soldiersHospitalPneumonia} readOnly/>
                </td>

                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalTotal" value={rowData.cadetsHospitalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalORZ" value={rowData.cadetsHospitalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsHospitalPneumonia" value={rowData.cadetsHospitalPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersStationaryTotal" value={rowData.soldiersStationaryTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersORZ" value={rowData.soldiersORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="soldiersPneumonia" value={rowData.soldiersPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsStationaryTotal" value={rowData.cadetsStationaryTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsORZ" value={rowData.cadetsORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="cadetsPneumonia" value={rowData.cadetsPneumonia} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalStationaryTotal" value={rowData.totalTotal} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalORZ" value={rowData.totalORZ} readOnly/>
                </td>
                <td className="input-cell9">
                    <input type="number" name="totalPneumonia" value={rowData.totalPneumonia} readOnly/>
                </td>
                </tr>
            ))}
            </tbody>
            </table>
            </form>
        </div>
    );
};

export default RotatedTableComponentReed ;

