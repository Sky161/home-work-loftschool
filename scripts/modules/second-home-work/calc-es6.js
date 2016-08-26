/*
* Second home work calculator
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

class ObjCalculator {
	constructor(firstNumber) {
		this.firstNumber = firstNumber;
	}

	sum() {
		let res = this.firstNumber;
		for(let i in arguments){
			res += arguments[i];
		}
		return res;
	}

	dif() {
		let res = this.firstNumber;
		for(let i in arguments){
			res -= arguments[i];
		}
		return res;
	}

	div() {
		let res = this.firstNumber;
		for(let i in arguments){
			if (arguments[i] == 0)
				throw new Error("На 0 делить нельзя!");
			res /= arguments[i];
		}
		return res;
	}

	mul() {
		let res = this.firstNumber;
		for(let i in arguments){
			res *= arguments[i];
		}
		return res;
	}
}

class SqlCalc extends ObjCalculator {
	sum() {
		let res = super.sum.apply(this, arguments);
		return res * res;
	}

	dif() {
		let res = super.dif.apply(this, arguments);
		return res * res;
	}

	div() {
		let res = super.div.apply(this, arguments);
		return res * res;
	}

	mul() {
		let res = super.mul.apply(this, arguments);
		return res * res;
	}
}

module.exports = { ObjCalculator, SqlCalc }
