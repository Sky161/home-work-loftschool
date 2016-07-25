/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//Third Home Work
const thirdHWfirst = require("./modules/third-home-work/first-assignment.js");
const thirdHWsecond = require("./modules/third-home-work/second-assignment");

let array = [1, 2, 3, 4, 5, 6];
let array2 = [1, 2, 3, 4, 5, 6];

console.log("############ForEach############");
thirdHWfirst.myForEach(array, (item) => console.log(item));

console.log("############myFilter############");
let greaterThan4 = thirdHWfirst.myFilter(array, item => item > 4);
console.log(greaterThan4);

console.log("############myMap############");
let sqare = thirdHWfirst.myMap(array, item => item * item);
console.log(sqare);

console.log("############mySlice############");
console.log(thirdHWfirst.mySlice(array, 0, -3));

console.log("############myReduce############");
console.log(thirdHWfirst.myReduce(array, (a, b) => `${a} + ${b}`, 10));

console.log("############mySplice############");
let newArr1 = thirdHWfirst.mySplice(array2, 0, 2, "new");
console.log(array2);
console.log(newArr1);


var objA = {
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
		prop4: {
				subProp1: 'sub value1',
				subProp2: {
						subSubProp1: 'sub sub value1',
						subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
				}
		},
		prop5: 1000,
		prop6: new Date(2016, 2, 10)
};

var objB = {
		prop5: 1000,
		prop3: 'value3',
		prop1: 'value1',
		prop2: 'value2',
		prop6: new Date('2016/03/10'),
		prop4: {
				subProp2: {
						subSubProp1: 'sub sub value1',
						subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
				},
				subProp1: 'sub value1'
		}
};

console.log("############deepEqual############");
console.log(thirdHWsecond.deepEqual(objA, objB));
