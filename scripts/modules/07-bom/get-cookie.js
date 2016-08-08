/*
* Scripts function get cookie
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const getCookie = () => {
	let date = new Date;
	let cookieObj = {};
	let cookieArr = [];

	date.setDate(date.getDate() + 1);

	document.cookie = `name=Andrey; path=/; expires=${date.toUTCString()}`;
	document.cookie = `surname=Chechkin; path=/; expires=${date.toUTCString()}`;
	document.cookie = `age=23; path=/; expires=${date.toUTCString()}`;
	document.cookie = `learn=Javascript; path=/; expires=${date.toUTCString()}`;

	cookieArr = document.cookie.split(";");

	cookieArr.forEach((item) => {
		item = item.split("=");
		cookieObj[item[0]] = item[1];
	});

	console.log(cookieObj);
}

module.exports = { getCookie }
