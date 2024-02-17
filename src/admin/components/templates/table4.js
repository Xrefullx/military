import React, {useEffect, useState} from 'react';
import axios from "axios";

const WorkingGroupsTableComponentReed = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        axios.get('/table4')
            .then(response => {
                setTableData(response.data);
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    }, []);
    
    return (
        <div className="table-container">
            <p>3. Работа групп (комиссий) от вышестоящих органов управления, кооперации промышленности и представителей воинских частей других видов и родов ВС РФ:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Направление деятельности</th>
                        <th>Сроки, место</th>
                        <th>Состав</th>
                        <th>Кол-во л/с</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((rowData, index) => (
                        <tr key={index}>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="TheFieldOfActivity"
                                    value={rowData.TheFieldOfActivity}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="datesLocation"
                                    value={rowData.datesLocation}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="positionTitle"
                                    value={rowData.positionTitle}
                                    readOnly
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="kolVoLS"
                                    value={rowData.kolVoLS}
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

export default WorkingGroupsTableComponentReed;
