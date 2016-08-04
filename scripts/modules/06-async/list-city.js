/*
* Home work async, function ajax city list
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const list = (url) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();

		xhr.open("GET", url);
		xhr.responseType = "json";

		xhr.addEventListener("load", () => {
			if(xhr.status == 200){
				resolve(xhr);
			}else{
				reject(Error(xhr.textStatus));
			}
		});

		xhr.send();
	});
}

module.exports = { list }
