/*
* Function parse cookie and add elements onload
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

module.exports = () => {
	if(document.cookie){
		let area = document.querySelector(".area");
		let arrayCookie = document.cookie.split(";");

		let items = arrayCookie.find((element) => {
			if(element.indexOf("items=") != -1){
				return element;
			}
		});

		items = items.replace(/items=/g, '');
		let itemsObj = JSON.parse(items);
		let htmlFragment = document.createDocumentFragment();

		for (let i in itemsObj) {
			let newElement = document.createElement("div");
			let styles = itemsObj[i].style.join(";");

			newElement.id = itemsObj[i].id;
			newElement.className = itemsObj[i].className;
			newElement.setAttribute("style", styles);
			htmlFragment.appendChild(newElement);
		}

		area.appendChild(htmlFragment);
	}
}
