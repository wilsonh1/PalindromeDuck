var time = require ('time');

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

var cur = time.localtime(Date.now()/1000);

console.log(cur['hours'].toString()+cur['minutes'].toString());
console.log(checkPalindrome(cur['hours'].toString()+cur['minutes'].toString()));
