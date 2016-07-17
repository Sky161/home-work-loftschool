/*
* Third Home Work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

let myForEach = function(arr, func){
	let arrLength = arr.length;

	for(let i = 0; i < arrLength; i++){
		func(arr[i], i, arr);
	}
}

let myFilter = function(arr, func){
	let arrLength = arr.length;
	let newArr = [];

	for(let i = 0; i < arrLength; i++){
		if(func(arr[i]) == true){
			newArr.push(arr[i]);
		}
	}

	return newArr;
}

module.exports = {
	myForEach,
	myFilter
}
