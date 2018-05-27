
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

function ducker () {
	cur = new Date();

	hour = cur.getHours().toString();
	minutes = cur.getMinutes().toString();

	if (minutes.length == 1) 
		minutes = '0' + minutes;

	month = (cur.getMonth()+1).toString();
	date = cur.getDate().toString();
	year = cur.getFullYear().toString();
	
	console.log(month);
	
	time = checkPalindrome(hour + minutes);
	date = checkPalindrome(month + date + year);
	
	if ((time && date) || checkPalindrome(hour + minutes + month + date + year)) 
		T.post('statuses/update', { status: 'duck !! ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year}, tweeted)
	else if (time) 
		T.post('statuses/update', { status: 'duck ! ' + hour + ':' + minutes}, tweeted)
}

function tweeted (err, response) {
	if (err !== undefined) 
		console.log(err)
	else 
		console.log('Tweeted: ' + response)
}

setInterval(ducker, 1000*60);
