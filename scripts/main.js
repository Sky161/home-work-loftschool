/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

require("jquery");
const bootstrap = require("bootstrap");
const handlebars = require("handlebars");

//async
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

	homework2.list("https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json").then(
		(xhr) => {
			let templateListHtml = document.getElementById("list-template").innerHTML;
			let compileTmp = handlebars.compile(templateListHtml);
			let resultContainer = document.getElementById("result");

			let result = compileTmp({title: "Hello"});
			resultContainer.innerHTML += result;
	});

}
