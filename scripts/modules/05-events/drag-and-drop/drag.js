/*
* Function drag
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

module.exports = (element) => {
	let dragable = false;
	let layerY = 0;
	let layerX = 0;

	element.addEventListener("mousedown", (e) => {
		dragable = true;
		layerY = e.layerY;
		layerX = e.layerX;
	});

	document.addEventListener("mousemove", (e) => {
		if(dragable){
			element.style.top = e.clientY - layerY + "px";
			element.style.left = e.clientX - layerX + "px";
		}
	});

	element.addEventListener("mouseup", (e) => {
		dragable = false;
	});
}
