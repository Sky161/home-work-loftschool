/*
* First home work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const akardeon = () => {
	let akardeon = document.querySelector(".acardeon");

	if(akardeon){
		akardeon.addEventListener("click", function(e) {
			let target = e.target;
			let parent = this;
			let elements = parent.children;

			if(target.nodeName == "A") {
				e.preventDefault();

				for(let i = 0; i < elements.length; i++) {
					elements[i].classList.remove("active");
					elements[i].children[1].style.display = "none";
				}

				target.parentElement.classList.add("active");
				target.parentElement.children[1].style.display = "block";
			}
		});
	}
}

const dragAndDrop = () => {
	let container = document.querySelector("#drag-and-drop");
	let btn = document.querySelector("#create-element");

	btn.addEventListener("click", (e) => {
		let divElem = document.getElementById("newElement");

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

		if(divElem) {
			container.removeChild(divElem);
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
		element.id = "newElement";

		container.appendChild(element);

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
	});
}

module.exports = { akardeon, dragAndDrop }
