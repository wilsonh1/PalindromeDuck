
var Twit = require('twit');

var T = new Twit(require('./config.js'));

function checkPalindrome (s) {
	len = s.length;
	for (i=0; i<len/2; i++) {
		if (s[i]!=s[len-i-1])
			return false;
	}
	return true;
}

function ducker () {
	st = new Date(2019, 8, 10);
	cur = new Date();

	hour = cur.getHours();
	//if (hour > 12)
	//	hour -= 12;
	hour = hour.toString();

	minutes = cur.getMinutes().toString();
	if (minutes.length == 1)
		minutes = '0' + minutes;

	month = (cur.getMonth() + 1).toString();
	date = cur.getDate().toString();
	year = cur.getFullYear().toString();
	year2 = (cur.getFullYear() % 100).toString();

	excl = '!';
	diff = (Math.floor((cur.getTime() - st.getTime()) / (1000 * 60 * 60 * 24))) % 100;
	for (i=0; i<diff; i++)
		excl += '!';

	str = "";
	if (checkPalindrome(hour + minutes + month + date + year))
		str = 'DUCK ' + excl + ' ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year;
	else if (checkPalindrome(hour + minutes)) {
		if (checkPalindrome(month + date + year))
			str = 'DuCK ' + excl + ' ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year;
		else if (checkPalindrome(month + date + year2))
			str = 'duCK ' + excl + ' ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year2;
		else
			str = 'duck ' + excl + ' ' + hour + ':' + minutes;
	}
	if (str.length)
		T.post('statuses/update', { status: str}, tweeted);
}

function tweeted (err, response) {
	if (err !== undefined)
		console.log(err);
	else
		console.log('Tweeted: ' + response);
}

setInterval(ducker, 1000*59);
