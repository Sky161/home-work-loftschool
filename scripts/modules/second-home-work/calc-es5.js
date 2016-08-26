/*
* Second home work calculator
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

let ObjCalculator = function (firstNumber) {
	this.firstNumber = firstNumber;
}

ObjCalculator.prototype.sum = function() {
	let res = this.firstNumber;
	for(let i in arguments){
		res += arguments[i];
	}
	return res;
};

ObjCalculator.prototype.dif = function(){
	let res = this.firstNumber;
	for(let i in arguments){
		res -= arguments[i];
	}
	return res;
};

ObjCalculator.prototype.div = function(){
	let res = this.firstNumber;
	for(let i in arguments){
		if (arguments[i] == 0)
			throw new Error("На 0 делить нельзя!");
		res /= arguments[i];
	}
	return res;
};

ObjCalculator.prototype.mul = function(){
	let res = this.firstNumber;
	for(let i in arguments){
		res *= arguments[i];
	}
	return res;
};

let SqlCalc = function(firstNumber) {
	ObjCalculator.call(this, firstNumber);
};

SqlCalc.prototype = Object.create(ObjCalculator.prototype);

SqlCalc.prototype.sum = function() {
	let res = ObjCalculator.prototype.sum.apply(this, arguments);
	return res * res;
};

SqlCalc.prototype.dif = function() {
	let res = ObjCalculator.prototype.dif.apply(this, arguments);
	return res * res;
};

SqlCalc.prototype.div = function() {
	let res = ObjCalculator.prototype.div.apply(this, arguments);
	return res * res;
};

SqlCalc.prototype.mul = function() {
	let res = ObjCalculator.prototype.mul.apply(this, arguments);
	return res * res;
};

module.exports = { ObjCalculator, SqlCalc };
