/*
* Fourth Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const scanDOM = () => {
	let bodyChild = document.querySelector("body").childNodes;
	let objectDom = {}

	for(let i in bodyChild){
		if(i != "item" && i != "length"){
			let item = bodyChild[i].nodeName.toLowerCase();
			if(objectDom.hasOwnProperty([item])){
				objectDom[item]++;
			}else{
				objectDom[item] = 1;
			}
		}
	}

	console.log(objectDom);
}

module.exports = { scanDOM }
