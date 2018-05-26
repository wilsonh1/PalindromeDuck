//var time = require ('time');
//uninstalled

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

var cur = new Date();

var hour = cur.getHours().toString();
var minutes = cur.getMinutes().toString();

if (minutes.length==1) 
	minutes = '0'+minutes;

console.log(hour+minutes);
console.log(checkPalindrome(hour+minutes));

