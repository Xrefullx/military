import React from 'react';

const WorkingGroupsTableComponent = ({ tableData, handleChange,handleSubmit }) => {
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
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="datesLocation"
                                    value={rowData.datesLocation}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="positionTitle"
                                    value={rowData.positionTitle}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="kolVoLS"
                                    value={rowData.kolVoLS}
                                    onChange={(e) => handleChange(e, index)}
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

export default WorkingGroupsTableComponent;
