/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

require("jquery");
var bootstrap = require("bootstrap");

//async
const homework1 = require("./modules/06-async/timer.js");
const homework2 = require("./modules/06-async/list-city.js");

window.onload = () => {
	bootstrap;
	let resArr = [];

	let sortArray = (data) => {
		data.sort((a, b) => {
			let nameA = a.name.toLowerCase();
			let nameB = b.name.toLowerCase();

			if(nameA > nameB) {
				return 1;
			} else {
				return -1;
			}

			return 0;
		});

		return data;
	}

	homework1.timer(3000).then(
		() => console.log('я вывелась через 3 секунды')
	);

	homework2.list("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json").then(
		(xhr) => {
			let resArr = sortArray(xhr.response);

			//задание 2
			let container = document.querySelector("body #main-page");

			if(container) {
				let ul = document.createElement("ul");

				resArr.forEach((item) => {
					let li = document.createElement("li");
					li.innerHTML = item.name;

					ul.appendChild(li);
				});

				container.appendChild(ul);
			}

			return resArr;

		}, (error) => {
			console.error("Error", error);
		}
	).then((resArr) => {
		//задание 3
		let input = document.querySelector("#get-city");

		if(input) {
			let ul = document.createElement("ul");

			input.addEventListener("input", (e) => {
				let inpVal = e.target.value;
				let responseArr = [];

				if(inpVal.length != 0){
					responseArr = resArr.filter((item) => {
						if(item.name.indexOf(inpVal) != -1){
							return item;
						}
					});

					if(responseArr.length > 0){
						let resSelector = document.querySelector("#result");
						ul.innerHTML = "";

						responseArr.forEach((item) => {
							let li = document.createElement("li");
							li.innerHTML = item.name;

							ul.appendChild(li);
						});

						resSelector.appendChild(ul);
					}
				}else{
					ul.innerHTML = "";
				}
			});
		}
	});

}
