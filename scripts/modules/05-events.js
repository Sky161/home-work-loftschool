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

	akardeon.addEventListener("click", function(e) {
		let target = e.target;
		let parent = this;
		let elements = parent.children;

		if(target.nodeName == "A") {
			for(let i = 0; i < elements.length; i++) {
				elements[i].classList.remove("active");
				elements[i].children[1].style.display = "none";
			}

			target.parentElement.classList.add("active");
			target.parentElement.children[1].style.display = "block";
		}
	});
}

module.exports = { akardeon }
