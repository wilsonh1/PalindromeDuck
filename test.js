var time = require ('time');

var now = new time.Date();

now.setTimezone("America/New_York");

a = new now.Date();
console.log(a.toString());

//cur = now.localtime(Date.now()/1000);
//console.log(cur['minutes']);
