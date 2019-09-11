
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

//var cnt = 0;
//var excl = '!';

/*function incr () {
	cnt ++;
	if (cnt % 70 === 0) {
		excl += '!';
		console.log(excl);
	}
	console.log(cnt);
}*/

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

	istime = checkPalindrome(hour + minutes);
	isdate = checkPalindrome(month + date + year);

	excl = '!';
	diff = (Math.floor((cur.getTime() - st.getTime()) / (1000 * 60 * 60 * 24))) % 100;
	for (i=0; i<diff; i++)
		excl += '!';

	if ((istime && isdate) || checkPalindrome(hour + minutes + month + date + year)) {
		T.post('statuses/update', { status: 'DUCK ' + excl + ' ' + hour + ':' + minutes + ' ' + month + '/' + date + '/' + year}, tweeted)
		//incr();
	}
	else if (istime) {
		T.post('statuses/update', { status: 'duck ' + excl + ' ' + hour + ':' + minutes}, tweeted)
		//incr();
	}
}

function tweeted (err, response) {
	if (err !== undefined)
		console.log(err)
	else
		console.log('Tweeted: ' + response)
}

setInterval(ducker, 1000*59);
