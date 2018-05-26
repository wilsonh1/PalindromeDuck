var time = require ('time');

/*
var a = new time.Date();
a.setTimezone("America/Los_Ange");
console.log(a.toString());
*/

cur = now.localtime(Date.now()/1000);
console.log(cur['minutes'].toString());
