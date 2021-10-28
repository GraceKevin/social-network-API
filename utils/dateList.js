// Assisted with Brooke Madison from UCF class 

const addDateSuffix = date => {
    
    let dateString = date.toString();

    const lastChar = dateString.charAt(dateString.length - 1);

    if (lastChar === '1' && dateString !== '11') {
        dateString = `${dateString}st`;
    } 
    else if (lastChar === '2' && dateString !== '12') {
        dateString = `${dateString}nd`;
    } 
    else if (lastChar === '3' && dateString !== '13') {
        dateString = `${dateString}rd`;
    } 
    else {
        dateString = `${dateString}th`;
    }
  
    return dateString;
  };
  
  // function to format a timestamp, accepts the timestamp and an `options` object as optional parameters
  module.exports = (
    timestamp, {
        monthLength = 'short',
        dateSuffix = true
    } = {}
  ) => {
    let months;
  
    if (monthLength === 'short') {
        months = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } 
    else {
        months = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }
  
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
  
    let dayOfMonth;
  
    if (dateSuffix) {
        dayOfMonth = addDateSuffix(dateObj.getDate());
    } 
    else {
        dayOfMonth = dateObj.getDate();
    }
  
    const year = dateObj.getFullYear();
  
    let hour;
    if (dateObj.getHours > 12) {
        hour = Math.floor(dateObj.getHours() / 2);
    } 
    else {
        hour = dateObj.getHours();
    }
    if (hour === 0) {
        hour = 12;
    }
  
    const minutes = dateObj.getMinutes();
  
    let periodOfDay;
  
    if (dateObj.getHours() >= 12) {
        periodOfDay = 'pm';
    } else {
        periodOfDay = 'am';
    }
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
};
