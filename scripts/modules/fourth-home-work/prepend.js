/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const prepend = (container, newElement) => {
	let continerElem = document.querySelector(container);
	let newElemInner = document.querySelector(newElement);

	console.log(`Container - ${continerElem}, newElement - ${newElemInner}`);
}

module.exports = { prepend }
