const convertDate = function(date){
    const year = date.getFullYear();
    const month = date.getMonth()+1 ;
    let convertMonth = month  <10 ? `0${month}` : `${month}`;
    const day = date.getDate();
    debugger;
    let convertDay = day<10 ? `0${day}` : `${day}`;
    return `${year}/${convertMonth}/${convertDay}`
}



export {convertDate}