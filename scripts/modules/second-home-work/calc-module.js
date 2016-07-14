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
			let res = firstNumber;
			for(let i in arguments){
				res += arguments[i];
			}
			return res;
		},
		dif: function(){
			let res = firstNumber;
			for(let i in arguments){
				res -= arguments[i];
			}
			return res;
		},
		div: function(){
			let res = firstNumber;
			for(let i in arguments){
				if (arguments[i] == 0)
					throw new Error("На 0 делить нельзя!");
				res /= arguments[i];
			}
			return res;
		},
		mul: function(){
			let res = firstNumber;
			for(let i in arguments){
				res *= arguments[i];
			}
			return res;
		}
	}
}

module.exports = { calculator };
