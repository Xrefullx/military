import React, {useEffect, useState} from 'react';
import axios from "axios";


const CadetsOfTheBranch = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table9-1')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>Военнослужащие филиала, находящиеся на стационарном лечении в медицинских учреждениях вне:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>№ п/п</th>
                        <th>В/звание, подразделение</th>
                        <th>Фамилия, имя, отчество</th>
                        <th>Обстоятельства</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                {index + 1}
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="MilitaryRank"
                                    value={rowData.MilitaryRank}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="PeopleName"
                                    value={rowData.PeopleName}
                                    readOnly 
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="Circumstances"
                                    value={rowData.Circumstances}
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

export default CadetsOfTheBranch;
