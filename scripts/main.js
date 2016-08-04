/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//async
const homework1 = require("./modules/06-async/timer.js");
const homework2 = require("./modules/06-async/list-city.js");

homework1.timer(3000).then(
	() => console.log('я вывелась через 3 секунды')
);

homework2.list("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json").then(
	(xhr) => {
		let jsonRes = xhr.response;
		let resArr = [];

		for(let i in jsonRes) {
			resArr.push(jsonRes[i].name);
		}

		resArr.sort();

		let container = document.querySelector(".container");
		let ul = document.createElement("ul");

		container.appendChild(ul);

		resArr.forEach((item) => {
			let li = document.createElement("li");
			li.innerText = item;

			ul.appendChild(li);
		});

	}, (error) => {
		console.error("Error", error);
	}
);
