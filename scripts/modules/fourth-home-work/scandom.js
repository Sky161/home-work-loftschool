/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const scanDOM = (selector) => {
	let bodyChild = document.querySelector("body").childNodes;
	let objectDom = {}

	//console.log(bodyChild);

	for(let i in bodyChild){
		if(i != "item" && i != "length"){
			let item = bodyChild[i].nodeName.toLowerCase();
			let id = bodyChild[i].id;
			let classList = bodyChild[i].className;


			if(classList){
				classList = classList.split(" ");

				classList.forEach((item) => {
					let classDom = "." + item;
					
					if(objectDom.hasOwnProperty(classDom)){
						objectDom[classDom]++;
					}else{
						objectDom[classDom] = 1;
					}
				});
			}

			if(id){
				objectDom["#" + id] = 1;
			}

			if(objectDom.hasOwnProperty(item)){
				objectDom[item]++;
			}else{
				objectDom[item] = 1;
			}
		}
	}

	console.log(objectDom);
}

module.exports = { scanDOM }
