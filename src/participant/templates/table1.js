import React from 'react';

const LeadershipTableComponent = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className="table-container">
            <p>1. Информация по руководящему составу:</p>
            <form onSubmit={handleSubmit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th colSpan="2">В/Ч №</th>
                        <th>Начальник</th>
                        <th>Зам. начальника</th>
                        <th>Зам. начальника по УНР</th>
                        <th>Зам. начальника по вооружению</th>
                        <th>Зам. начальника по тылу</th>
                        <th>Зам. начальника по ВПР</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2"></td>
                        <td className="input-cell">
                            <input type="text" name="chief" value={formData.chief} onChange={handleChange} />
                        </td>
                        <td className="input-cell">
                            <input type="text" name="deputyChief" value={formData.deputyChief} onChange={handleChange} />
                        </td>
                        <td className="input-cell">
                            <input type="text" name="deputyChiefUNR" value={formData.deputyChiefUNR} onChange={handleChange} />
                        </td>
                        <td className="input-cell">
                            <input type="text" name="deputyChiefArmament" value={formData.deputyChiefArmament} onChange={handleChange} />
                        </td>
                        <td className="input-cell">
                            <input type="text" name="deputyChiefRear" value={formData.deputyChiefRear} onChange={handleChange} />
                        </td>
                        <td className="input-cell">
                            <input type="text" name="deputyChiefVPR" value={formData.deputyChiefVPR} onChange={handleChange} />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default LeadershipTableComponent;
