var time = require ('time');

/*
var a = new time.Date();
a.setTimezone("America/Los_Ange");
console.log(a.toString());
*/

function checkPalindrome (curtime) {
	if (curtime.length==3)
		return Boolean(curtime[0]==curtime[2]);	
	return Boolean(curtime[0]==curtime[3] && curtime[1]==curtime[2]);
}

var cur = time.localtime(Date.now()/1000);

console.log(cur['hours'].toString()+cur['minutes'].toString()));
console.log(checkPalindrome(cur['hours'].toString()+cur['minutes'].toString()));
