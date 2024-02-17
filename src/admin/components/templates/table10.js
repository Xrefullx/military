import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThePeriodOfAdmissionOfApplicants = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table10')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>10.	В период поступления абитуриентов, доклад по всем мероприятиям и особенностям данного периода:</p>
            <form>
                <table className="table">
                    <thead className="thead-style">
                    <tr>
                        <td rowSpan="2">План набора</td>
                        <td colSpan="4">Фактическое наличие</td>
                        <td rowSpan="2">Примечание</td>
                    </tr>
                    <tr>
                        <td>всего</td>
                        <td>из числа в/сл</td>
                        <td>из числа кадетов</td>
                        <td>из числа гп</td>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="recruitmentPlan"
                                    value={rowData.recruitmentPlan}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="inTotal"
                                    value={rowData.inTotal}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheMilitaryPersonnel"
                                    value={rowData.fromAmongTheMilitaryPersonnel}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheCadets"
                                    value={rowData.fromAmongTheCadets}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={rowData.fromAmongTheGP}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={rowData.Note}
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

export default ThePeriodOfAdmissionOfApplicants;