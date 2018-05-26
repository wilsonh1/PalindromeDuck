var time = require ('time');

var now = new time.Date();

now.setTimezone("America/Los_Angeles");

cur = new time.Date();
console.log(cur.toString());

cur1 = time.localtime(Date.now()/1000);
console.log(cur.entries);
