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

	let elem;
	let removeArr = [];

	if(typeof element == "string"){
		elem = document.querySelector(element);
	}else{
		elem = element;
	}

	for (let i = 0; i < elem.childNodes.length; i++) {
		if(elem.childNodes[i].nodeType == 3){
			removeArr.push(elem.childNodes[i]);
		}else{
			deleteTextNodes(elem.childNodes[i]);
		}
	}

	removeArr.forEach((item) => {
		item.parentNode.removeChild(item);
	});
}

module.exports = { deleteTextNodes }
