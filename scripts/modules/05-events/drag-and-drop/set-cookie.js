/*
* Set cookie info divs
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

module.exports = () => {
	let items = document.querySelectorAll("#drag-and-drop .area .newElement");
	let date = new Date;
	let itemsObject = {}

	for(let i = 0; i < items.length; i++){
		let item = items[i];
		let stylesArray = item.getAttribute("style").split(";");

		itemsObject[i] = {
			"id": item.id,
			"className": item.className,
			"style": stylesArray
		}
	}

	document.cookie = "items=;";

	date.setDate(date.getDate() + 1);
	document.cookie = `items=${JSON.stringify(itemsObject)}; path=/; expires=${date.toUTCString()};`;
}
