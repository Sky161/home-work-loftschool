/*
* Second home work calculator
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict'

let calculator = function(firstNumber){
	return {
		sum: function(){
			for(let i in arguments){
				firstNumber += arguments[i];
			}
			return firstNumber;
		},
		dif: function(){
			for(let i in arguments){
				firstNumber -= arguments[i];
			}
			return firstNumber;
		}
	}
}

module.exports = { calculator };
