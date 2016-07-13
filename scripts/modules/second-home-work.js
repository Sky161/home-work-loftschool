/*
* Second home work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

let checkEmptArr = arr => {
	if(arr.length == 0)
		throw new Error("Пустой массив!");
}

let isAllTrue = function(source, filterFn){
	let allTrue = true;

	checkEmptArr(source);

	source.forEach(item => {
		if(filterFn(item) == false)
			allTrue = false;
	});

	return allTrue;
}

let isSomeTrue = function(source, filterFn){
	let result = false;

	checkEmptArr(source);

	for(let i = 0; i < source.length; i++){
		if(filterFn(source[i]) == true)
			return result = true;
	}

	return result;
}

module.exports = {
	isAllTrue,
	isSomeTrue
};
