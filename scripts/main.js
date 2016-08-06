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

const jsonToArray = (json) => {
	let jsonRes = json;
	let resArr = [];

	for(let i in jsonRes) {
		resArr.push(jsonRes[i].name);
	}

	resArr.sort();

	return resArr;
}

window.onload = () => {
	bootstrap;
	let resArr = [];

	homework1.timer(3000).then(
		() => console.log('я вывелась через 3 секунды')
	);

	homework2.list("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json").then(
		(xhr) => {
			let resArr = jsonToArray(xhr.response);

			//задание 2
			let container = document.querySelector("body #main-page");

			if(container) {
				let ul = document.createElement("ul");

				container.appendChild(ul);

				resArr.forEach((item) => {
					let li = document.createElement("li");
					li.innerHTML = item;

					ul.appendChild(li);
				});
			}

			//задание 3
			let input = document.querySelector("#get-city");

			if(input) {
				let ul = document.createElement("ul");

				input.addEventListener("input", (e) => {
					let inpVal = e.target.value;
					let responseArr = [];

					if(inpVal.length != 0){
						responseArr = resArr.filter((item) => {
							if(item.indexOf(inpVal) != -1){
								return item;
							}
						});

						if(responseArr.length > 0){
							let resSelector = document.querySelector("#result");
							ul.innerHTML = "";

							responseArr.forEach((item) => {
								let li = document.createElement("li");
								li.innerHTML = item;

								ul.appendChild(li);
							});

							resSelector.appendChild(ul);
						}
					}else{
						ul.innerHTML = "";
					}
				});
			}

		}, (error) => {
			console.error("Error", error);
		}
	);

}
