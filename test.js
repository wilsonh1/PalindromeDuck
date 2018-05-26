var time = require ('time');

//var now = new time.Date();

//now.setTimezone("America/Los_Angeles");

cur = time.localtime(Date.now()/1000);
console.log(cur['minutes']);
