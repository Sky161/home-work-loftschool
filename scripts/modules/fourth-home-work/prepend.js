/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const prepend = (container, newElement) => {
	let containerElem = document.querySelector(container);
	let newElemInner = document.querySelector(newElement);

	if(container === undefined || newElement === undefined){
		throw new Error("Не переданы все агрументы!");
	}else if(containerElem === null){
		throw new Error("Элемент в который надо перместить элемент не найден");
	}else if(newElement === null){
		throw new Error("Элемент который нужно переместить не найден");
	}

	containerElem.insertBefore(newElemInner, containerElem.childNodes[0]);
}

module.exports = { prepend }
