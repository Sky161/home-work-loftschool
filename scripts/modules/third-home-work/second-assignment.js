/*
* Third Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

let deepEqual = function (obj1, obj2){
	let result = true;

	if(Object.keys(obj1).length != Object.keys(obj2).length){
		return result = false;
	}

	for(let key in obj1){
		if(key in obj2){
			switch (typeof obj1[key]) {
				case "object":
					if(obj1[key] instanceof Date){
						if(obj1[key].valueOf() != obj2[key].valueOf()){
							result = false;
						}
					}else{
						if(deepEqual(obj1[key], obj2[key]) == false){
							result = false;
						};
					}
					break;

				default:
					if(obj1[key] != obj2[key]){
						result = false;
					}
			}
		}else{
			result = false;
		}
	}

	return result;
}

module.exports = { deepEqual }
