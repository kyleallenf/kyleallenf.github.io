var d = new Date();

var daysOfWeek = new Array(7);
daysOfWeek[0] = "Sunday";
daysOfWeek[1] = "Monday";
daysOfWeek[2] = "Tuesday";
daysOfWeek[3] = "Wednesday";
daysOfWeek[4] = "Thursday";
daysOfWeek[5] = "Friday";
daysOfWeek[6] = "Saturday";
var ww = daysOfWeek[d.getDay()];

var month = new Array(12);
month[0] = "January";
month[1] = "Febuary";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthname = month[d.getMonth()];
document.getElementById("currentdate").innerHTML = ww + ', ' + d.getDate() + ' ' + monthname + ' ' + d.getFullYear();


