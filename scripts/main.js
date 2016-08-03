/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//async
const homework1 = require("./modules/06-async/timer");

homework1.timer(3000).then(
	() => console.log('я вывелась через 3 секунды')
);
