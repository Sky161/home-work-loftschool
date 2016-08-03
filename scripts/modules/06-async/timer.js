/*
* First home work
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const timer = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

module.exports = { timer }
