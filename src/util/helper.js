const printDate= () =>{
    return new Date().toLocaleDataString();
}
const printMonth= ()=>{
    const monthName =["January","Februray","March","April","May","June","July","August","September","October","November",
    "December"];
    let monthp= new Date().getMonth();
    let presentMonth=monthName[monthp];
    return presentMonth;
}
const getBatchInfo= () =>{
    return 'Thorium, W3D1, the topic for today is Nodejs module system';
}
module.exports={
    printDate:printDate,
    printMonth:printMonth,
    getBatchInfo:getBatchInfo
}

