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
			let resArr = sortArray(xhr.response);
			let templateListHtml = document.getElementById("list-template").innerHTML;
			let compileTmp = handlebars.compile(templateListHtml);
			let resultContainer = document.getElementById("result");
			let input = document.getElementById("get-city");
			let searchArr = [];

			let result = compileTmp({"cities": resArr});
			resultContainer.innerHTML = result;

			input.addEventListener("input", (e) => {
				let val = e.target.value;
				let searchArr = [];

				if(val.length > 0) {
					searchArr = resArr.filter((item) => {
						if(item.name.toLowerCase().indexOf(val.toLowerCase()) != -1){
							return item;
						}
					});
				}else{
					searchArr = resArr;
				}
				
				result = compileTmp({"cities": searchArr});
				resultContainer.innerHTML = result;
			});
	})

}
