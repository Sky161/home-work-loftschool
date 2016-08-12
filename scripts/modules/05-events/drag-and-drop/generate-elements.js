/*
* Generate random div
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';
let idCount = 0;

module.exports = () => {
	let content = document.querySelector(".content #drag-and-drop");

	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const getColor = () => {
		let r = getRandomInt(0, 255);
		let g = getRandomInt(0, 255);
		let b = getRandomInt(0, 255);
		let res = `rgb(${r},${g},${b})`;

		return res;
	}

	let w = getRandomInt(100, 1000);
	let h = getRandomInt(100, 1000);
	let l = getRandomInt(0, 500);
	let t = getRandomInt(0, 500);
	let color = getColor();

	let element = document.createElement("div");

	element.style.width = w + "px";
	element.style.height = h + "px";
	element.style.left = l + "px";
	element.style.top = t + "px";
	element.style.backgroundColor = color;
	element.className = "newElement";
	element.id = `newElement${idCount}`;

	idCount++;

	return element;
}
