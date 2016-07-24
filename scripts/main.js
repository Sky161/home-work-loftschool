/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

//Third Home Work
const thirdHW = require("./modules/third-home-work.js");

let array = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 4, 5, 6];

console.log("############ForEach############");
thirdHW.myForEach(array, (item) => console.log(item));

console.log("############myFilter############");
let greaterThan4 = thirdHW.myFilter(array, item => item > 4);
console.log(greaterThan4);

console.log("############myMap############");
let sqare = thirdHW.myMap(array, item => item * item);
console.log(sqare);

console.log("############mySlice############");
console.log(thirdHW.mySlice(array, 0, -3));

console.log("############myReduce############");
console.log(thirdHW.myReduce(array, (a, b) => `${a} + ${b}`, 10));

console.log("############mySplice############");
let newArr1 = thirdHW.mySplice(array2, 3, 0, "new");
console.log(array2);
console.log(newArr1);

console.log("############splice############");
let newArr2 = array.splice(3, 0, "new");
console.log(array);
console.log(newArr1);
