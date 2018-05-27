
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

var cnt = 69;
var excl = '!!';

function incr () {
	cnt ++;
	if (cnt % 70 === 0)
		excl = excl + '!';
	console.log(cnt);
}

function ducker () {
	cur = new Date();

	hour = cur.getHours().toString();
	minutes = cur.getMinutes().toString();

	if (minutes.length == 1) 
		minutes = '0' + minutes;

	month = (cur.getMonth()+1).toString();
	date = cur.getDate().toString();
	year = cur.getFullYear().toString();
	
	time = checkPalindrome(hour + minutes);
	date = checkPalindrome(month + date + year);
	
	if ((time && date) || checkPalindrome(hour + minutes + month + date + year)) {
		T.post('statuses/update', { status: 'DUCK ' + excl + ' ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year}, tweeted)
		incr();
	}
	else if (time) {
		T.post('statuses/update', { status: 'duck ' + excl + ' ' + hour + ':' + minutes}, tweeted)
		incr();
	}
}

function tweeted (err, response) {
	if (err !== undefined) 
		console.log(err)
	else 
		console.log('Tweeted: ' + response)
}

setInterval(ducker, 1000*60);
