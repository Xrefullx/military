export const handleRowChange = (e, rowIndex,setTableData) => {
    const { name, value } = e.target;
    setTableData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = {
            ...newData[rowIndex],
            [name]: value,
        };
        return newData;
    });
};

export const handleRowChange2 = (e, rowIndex,setTableData2) => {
    const { name, value } = e.target;
    setTableData2((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = {
            ...newData[rowIndex],
            [name]: value,
        };
        return newData;
    });
};

export const handleRowChange3 = (e, rowIndex,setTableData3) => {
    const { name, value } = e.target;
    setTableData3((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = {
            ...newData[rowIndex],
            [name]: value,
        };
        return newData;
    });
};