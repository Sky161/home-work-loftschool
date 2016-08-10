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

	const addCookie = (name, value, duration) => {
		date.setDate(date.getDate() + duration);
		document.cookie = `${name}=${value}; path=/; expires=${date.toUTCString()}`;
	}

	addCookie("name", "Andrey", 1);
	addCookie("surname", "Chechkin", 2);
	addCookie("age", "23", 3);

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
				date.setDate(0);
				document.cookie = `${nameCookie}=; expires=${date.toUTCString()}`;
			}
		}
	}

	let formAddCookie = document.forms.addCookie;

	formAddCookie.addEventListener("submit", function(e) {
		let inputs = this.elements
		let error = false;

		e.preventDefault();
		for(let i = 0; i < inputs.length; i++) {
			let inputsVal = inputs[i].value;

			if(inputsVal.length == 0) {
				error = true;
				break;
			}else{
				error = false;
			}
		}

		if(error) {
			alert("Заполните все поля формы");
		} else {
			let name = inputs.name.value;
			let val = inputs.value.value;
			let duration = inputs.duration.value;
			let tr = document.createElement("tr");

			addCookie(name, val, duration);
			tr.innerHTML = `
				<td>${name}</td>
				<td>${val}</td>
				<td><a href="${name}"> Удалить</a></td>
			`;
			tableBody.appendChild(tr);
			formAddCookie.reset();
		}

	});
}

module.exports = { getCookie }
