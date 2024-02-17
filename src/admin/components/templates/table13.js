import React, {useEffect, useState} from 'react';
import axios from "axios";

const InformationAboutMilitaryPersonnelOfTheAcademy = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table13')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>13. Сведения о военнослужащих воинской части, находящихся за пределами гарнизона на личном транспорте:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Подразделение</th>
                        <th>На выезде</th>
                        <th>В пути</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Division"
                                    value={rowData.Division}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="OnTheRoad"
                                    value={rowData.OnTheRoad}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="OnTheWay"
                                    value={rowData.OnTheWay}
                                    readOnly 
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default InformationAboutMilitaryPersonnelOfTheAcademy;