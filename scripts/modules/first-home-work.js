/*
* First home work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

let consoleRec = function(arr, i){

	console.log(arr[i]);
	i++;

	if(arr.length > i){
		consoleRec(arr, i);
	}
}

module.exports = { consoleRec };
