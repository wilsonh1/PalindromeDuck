var time = require ('time');

var now = new time.Date();

now.setTimezone("America/New_York");

cur = now.localtime(Date.now()/1000);
console.log(cur['minutes']);
