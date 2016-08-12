/*
* First home work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const dragFunction = require("./drag-and-drop/drag.js");
const generateElement = require("./drag-and-drop/generate-elements.js");
const setCookie = require("./drag-and-drop/set-cookie.js");

const dragAndDrop = () => {
	let container = document.querySelector("#drag-and-drop .area");
	let btnAdd = document.querySelector("#create-element");
	let btnSave = document.querySelector("#save");

	if(container) {
		btnAdd.addEventListener("click", (e) => {
			let newElem = generateElement();
			container.appendChild(newElem);
			dragFunction(newElem);
		});

		btnSave.addEventListener("click", (e) => {
			setCookie();
		});
	}
}

module.exports = { dragAndDrop }
