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

const dragAndDrop = () => {
	let container = document.querySelector("#drag-and-drop");
	let btn = document.querySelector("#create-element");

	if(btn) {
		btn.addEventListener("click", (e) => {
			let newElem = generateElement();

			container.appendChild(newElem);

			dragFunction(newElem);
		});
	}
}

module.exports = { dragAndDrop }
