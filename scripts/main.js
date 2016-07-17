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

console.log("############ForEach############");
thirdHW.myForEach(array, (item) => console.log(item));

console.log("############myFilter############");
let greaterThan4 = thirdHW.myFilter(array, item => item > 4);
console.log(greaterThan4);
