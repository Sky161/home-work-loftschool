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
	let cookies = document.cookie;

	date.setDate(date.getDate() + 1);

	cookies = `name=Andrey; surname=Chechkin; age=23; learn=Javascript path=/; expires=${date.toUTCString()}`; 

	console.log(cookies);
}

module.exports = { getCookie }
