var time = require ('time');

var now = new time.Date();

now.setTimezone("America/Los_Angeles");

cur = new time.Date();
console.log(cur.toString());

console.log(time.localtime(Date.now()/1000));
