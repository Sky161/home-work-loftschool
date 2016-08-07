/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

require("jquery");
var bootstrap = require("bootstrap");

//bom
let bom1 = require("./modules/07-bom/get-cookie.js");

window.onload = () => {
	bootstrap;

	bom1.getCookie();
}
