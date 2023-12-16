export const removeRow = (tableData, setTableData, index) => {
    if (tableData.length > 1) {
        setTableData((prevData) => prevData.filter((_, i) => i !== index));
    }
};
export const removeRow2 = (tableData2, setTableData2,index) => {
    if (tableData2.length > 1) {
        setTableData2((prevData) => prevData.filter((_, i) => i !== index));
    }
};
export const removeRow3 = (tableData3, setTableData3,index) => {
    if (tableData3.length > 1) {
        setTableData3((prevData) => prevData.filter((_, i) => i !== index));
    }
};