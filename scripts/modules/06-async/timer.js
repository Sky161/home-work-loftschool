/*
* Home work async, function timer
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const timer = (time) => new Promise((resolve) => setTimeout(resolve, time));

module.exports = { timer }
