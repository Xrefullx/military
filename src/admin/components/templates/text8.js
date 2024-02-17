import React, {useEffect, useState} from 'react';
import './templatesCss.css';
import axios from "axios";

const InformationAboutOfficials = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/text8')
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
                    8.	Данные о должностных лицах, занимающих руководящие должности, находящиеся на излечении в медицинских учреждениях:
                    <input
                        type="text"
                        name="InformationAboutOfficials"
                        value={tableData.InformationAboutOfficials}
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

export default InformationAboutOfficials;