//var time = require ('time');

/*
var a = new time.Date();
a.setTimezone("America/New_York");
console.log(a.toString());
*/

function checkPalindrome (s) {
	len = s.length;
	for (i=0; i<len/2; i++) {
		if (s[i]!=s[len-i-1])
			return false;
	}
	return true;
}

/*var cur = time.localtime(Date.now()/1000);

var hour = cur['hours'].toString();
var minutes = cur['minutes'].toString();

if (minutes.length==1) 
	minutes = '0'+minutes;

console.log(hour+minutes);
console.log(checkPalindrome(hour+minutes));
*/

var cur = new Date();
console.log(cur.minutes);
