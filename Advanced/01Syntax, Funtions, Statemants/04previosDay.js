function date(year, month, day) {
    let today = new Date(year, (month - 1), day);
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let newDay = yesterday.getDate()
    let newM = yesterday.getMonth() + 1
    let newY = yesterday.getFullYear()
    console.log(`${newY}-${newM}-${newDay}`);


}   
date(2016, 10, 1)