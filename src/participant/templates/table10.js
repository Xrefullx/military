import React from "react";

const ThePeriodOfAdmissionOfApplicants = ({ formData,handleSubmit,handleChange }) => {
    return (
        <div className="table-container">
            <p>10.	В период поступления абитуриентов, доклад по всем мероприятиям и особенностям данного периода:</p>
            <form onSubmit={handleSubmit}>
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
                    <tr>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="recruitmentPlan"
                                    value={formData.recruitmentPlan}
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="inTotal"
                                    value={formData.inTotal}
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheMilitaryPersonnel"
                                    value={formData.fromAmongTheMilitaryPersonnel}
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="fromAmongTheCadets"
                                    value={formData.fromAmongTheCadets}
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="eventDetails"
                                    value={formData.fromAmongTheGP}
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="input-cell">
                                <input
                                    type="text"
                                    name="personnelCount"
                                    value={formData.Note}
                                    onChange={handleChange}
                                />
                            </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default ThePeriodOfAdmissionOfApplicants;