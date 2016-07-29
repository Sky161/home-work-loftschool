/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const scanDOM = () => {
	let objectDom = {};

	let select = document.querySelector("body").childNodes;

	const count = (atr) =>{
		for(let i = 0; i < atr.length; i++){
			let item = atr[i].nodeName.toLowerCase();
			let id = atr[i].id;
			let classList = atr[i].className;

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

	const childBeginer = (atr) => {
		for(let i = 0; i < atr.length; i++){
			if(atr[i].childNodes.length > 0){
				count(atr[i].childNodes);
				childBeginer(atr[i].childNodes);
			}
		}
	}

	count(select);
	childBeginer(select);

	console.log(objectDom);
}

module.exports = { scanDOM }
