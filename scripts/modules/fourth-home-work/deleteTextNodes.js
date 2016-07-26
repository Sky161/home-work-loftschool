/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const deleteTextNodes = (element) => {
	if(element === undefined){
		throw new Error("Не передан аргумент");
	}else if(element === null){
		throw new Error("Элемент не найден");
	}

	let elem = document.querySelector(element);

	elem.childNodes.forEach((element) => {
		if(element.nodeName == "#text"){
			elem.removeChild(element);
		}
	});
}

module.exports = { deleteTextNodes }
