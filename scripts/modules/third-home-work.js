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

let myMap = function(arr, func){
	let arrLength = arr.length;
	let newArr = [];

	for(let i = 0; i < arrLength; i++){
		newArr.push(func(arr[i]));
	}

	return newArr;
}

let mySlice = function(arr, start, end){
	if(!Array.isArray(arr))
		throw new Error("Передайте массив!");

	if(typeof(start) != "number")
		throw new Error("Первый аргумент должно быть число");

	let arrLength = arr.length;
	let newArr = [];
	let i = start;

	if(typeof(end) == "number"){
		if(end > 0){
			arrLength = end;
		}
		else if (end < 0){
			arrLength += end;
		}
	}


	for (i; i < arrLength; i++) {
		newArr.push(arr[i]);
	}

	return newArr;
}

let myReduce = function(arr, func, startInter){
	let arrLength = arr.length;
	let result;
	let i;

	if(startInter == undefined){
		i = 2;
		result = func(arr[0], arr[1]);
	}else{
		i = 1;
		result = func(startInter, arr[0]);
	}

	for (i; i < arrLength; i++) {
		result = func(result, arr[i]);
	}

	return result;
}

let mySplice = function( arr, start, end ) {
	let newArr = [];
	let forBeforeLength = 0;
	let afterStartCounter = 0;

		if(start > 0){
			forBeforeLength = start;
			afterStartCounter = start + end;
		} else if(start < 0){
			forBeforeLength = arr.length + start;
			afterStartCounter = arr.length + start + end;
		}else{
			forBeforeLength = start;
			afterStartCounter = end;
		}

		for (let i = 0; i < forBeforeLength; i++) {
			newArr.push(arr[i]);
		}
		if (arguments.length > 3){
			for (let i = 3; i < arguments.length; i++) {
				newArr.push(arguments[i]);
			}
		}
		for (let i = afterStartCounter; i < arr.length; i++) {
			newArr.push(arr[i]);
		}
		arr.length = 0;
		myForEach(newArr, (item , i) => arr[i] = item);
}

module.exports = {
	myForEach,
	myFilter,
	myMap,
	mySlice,
	myReduce,
	mySplice
}
