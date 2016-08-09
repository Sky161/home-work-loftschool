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

	let tableBody = document.querySelector("table tbody");
	let trHtml = "";

	for (let item in cookieObj) {
		let key = item;
		let val = cookieObj[item];

		trHtml += `
			<tr>
				<td>${key}</td>
				<td>${val}</td>
				<td><a href="${key}"> Удалить</a></td>
			</tr>
		`;
	}

	tableBody.innerHTML = trHtml;

	tableBody.onclick = (e) => {
		if(e.target.localName === "a") {
			let target = e.target;
			let nameCookie = target.getAttribute("href");
			let msg = confirm(`Удалить cookie с именем ${nameCookie}`);

			e.preventDefault();
			if(msg) {
				e.target.closest("tr").remove();
				date.setDate(date.getDate() - 1);
				document.cookie = `${nameCookie}=; expires=${date.toUTCString()}`;
			}
		}
	}
}

module.exports = { getCookie }
