/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//Second Home Work
const calcEs5 = require("./modules/second-home-work/calc-es5.js");
const calcEs6 = require("./modules/second-home-work/calc-es6.js");

//#3
let myObjCalculator = new calcEs5.ObjCalculator(100);
let mySqlCal = new calcEs5.SqlCalc(100);
let es6ObjCalculator = new calcEs5.ObjCalculator(100);
let es6SqlCal = new calcEs6.SqlCalc(100);

console.log("################calcEs6- ObjCalculator################");
console.log(es6SqlCal.sum(1,2,3));
console.log(es6SqlCal.dif(10, 20));
console.log(es6SqlCal.div(2, 2));
console.log(es6SqlCal.mul(2, 2));

console.log("################calcEs6 - mySqlCal################");
console.log(es6ObjCalculator.sum(1,2,3));
console.log(es6ObjCalculator.dif(10, 20));
console.log(es6ObjCalculator.div(2, 2));
console.log(es6ObjCalculator.mul(2, 2));

console.log("################calcEs5 - mySqlCal################");
console.log(mySqlCal.sum(1,2,3));
console.log(mySqlCal.dif(10, 20));
console.log(mySqlCal.div(2, 2));
console.log(mySqlCal.mul(2, 2));


console.log("################calcEs5- ObjCalculator################");
console.log(myObjCalculator.sum(1,2,3));
console.log(myObjCalculator.dif(10, 20));
console.log(myObjCalculator.div(2, 2));
console.log(myObjCalculator.mul(2, 2));
