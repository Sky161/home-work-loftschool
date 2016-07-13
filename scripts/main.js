/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

//Second Home Work
let secondHW = require("./modules/second-home-work.js");

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];

let isNumber = function (val) {
	return typeof val === 'number';
}

//#1
console.log("#1");
console.log(secondHW.isAllTrue(allNumbers, isNumber));
console.log(secondHW.isAllTrue(someNumbers, isNumber));
console.log(secondHW.isAllTrue(noNumbers, isNumber));
//console.log(secondHW.isAllTrue([], isNumber));

//#2
console.log("#2");
console.log(secondHW.isSomeTrue(someNumbers, isNumber));
console.log(secondHW.isSomeTrue(someNumbers, isNumber));
console.log(secondHW.isSomeTrue(noNumbers, isNumber));
//console.log(secondHW.isAllTrue([], isNumber));
