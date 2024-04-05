// Your code here
function createEmployeeRecord(array) {
    return {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents:[],
    }
}
 function createEmployeeRecords(array){
return array.map(createEmployeeRecord)
 }
 function createTimeInEvent(employeeRecord,dateTimeString) {
    const [date,hour] = dateTimeString.split('')
    employeeRecord.timeInEvents.push({
        type:"TimeIn",
        hour:(hour,10),
        date:date,
    })
    return employeeRecord 
}
    function createTimeOutEvent(employeeRecord,dateTimeString){
        const [date,hour] = dateTimeString.split('')
        employeeRecord.timeInEvents.push({
            type:"TimeOut",
            hour:(hour,10),
            date:date,
        })
        return employeeRecord 
    }
    function hoursWorkedOnDate(employeeRecord, date) {
        const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
        const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
        return (timeOut.hour - timeIn.hour) / 100;
    }
    
    function wagesEarnedOnDate(employeeRecord, date) {
        const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
        return hoursWorked * employeeRecord.payPerHour;
    }
    function allWagesFor(employeeRecord) {
        const dates = employeeRecord.timeInEvents.map(event => event.date);
        return dates.reduce((totalWages, date) => {
            return totalWages + wagesEarnedOnDate(employeeRecord, date);
        }, 0);
    }
    
    function calculatePayroll(employeeRecords) {
        return employeeRecords.reduce((totalPayroll, employeeRecord) => {
            return totalPayroll + allWagesFor(employeeRecord);
        }, 0);
    }
    
    
 