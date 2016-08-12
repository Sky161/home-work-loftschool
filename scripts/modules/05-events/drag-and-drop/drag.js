/*
* Function drag
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

module.exports = () => {
	let dragable = false;
	let layerY = 0;
	let layerX = 0;
	let area = document.querySelector(".area");

	area.addEventListener("mousedown", (e) => {
		if(e.target.className == "newElement") {
			dragable = true;
			layerY = e.layerY;
			layerX = e.layerX;
		}
	});

	area.addEventListener("mousemove", (e) => {
		if(e.target.className == "newElement") {
			if(dragable){
				e.target.style.top = e.clientY - layerY + "px";
				e.target.style.left = e.clientX - layerX + "px";
			}
		}
	});

	area.addEventListener("mouseup", (e) => {
		if(e.target.className == "newElement") {
			dragable = false;
		}
	});
}
