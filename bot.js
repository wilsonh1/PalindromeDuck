//var time = require ('time');
//uninstalled

/*
var a = new time.Date();
a.setTimezone("America/New_York");
console.log(a.toString());
*/

var Twit = require('twit')

var T = new Twit(require('./config.js'))

function checkPalindrome (s) {
	len = s.length;
	for (i=0; i<len/2; i++) {
		if (s[i]!=s[len-i-1])
			return false;
	}
	return true;
}

/*
var cur = new Date();

var hour = cur.getHours().toString();
var minutes = cur.getMinutes().toString();

if (minutes.length==1) 
	minutes = '0'+minutes;

console.log(hour+minutes);
console.log(checkPalindrome(hour+minutes));
*/

/*function ducker (time, date) {
	if (time && date) 
		return 'duck !!';
	if (time)
		return 'duck !';
	return '';
}*/

function ducker () {
	cur = new Date();

	hour = cur.getHours().toString();
	minutes = cur.getMinutes().toString();

	if (minutes.length==1) 
		minutes = '0'+minutes;

	//console.log(hour+minutes);
	//console.log(checkPalindrome(hour+minutes));
	
	//if (checkPalindrome(hour+minutes))
	//	console.log(hour+minutes);

	month = (cur.getMonth()+1).toString();
	date = cur.getDate().toString();
	year = cur.getFullYear().toString();
	
	//console.log(ducker(checkPalindrome(hour+minutes), checkPalindrome(month+date+year)));
	
	time = checkPalindrome(hour+minutes);
	date = checkPalindrome(month+date+year);
	
	if ((time && date) || checkPalindrome(hour+minutes+month+date+year)) 
		T.post('statuses/update', { status: 'duck !!' }, tweeted)
	else if (time) 
		T.post('statuses/update', { status: 'duck !' }, tweeted)
	
}

function tweeted (err, response) {
	if (err !== undefined) 
		console.log(err)
	else 
		console.log('Tweeted: ' + response)
}

//checkTime();
setInterval(ducker, 1000*60);
