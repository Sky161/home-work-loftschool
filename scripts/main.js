/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//fifth home work
let eventsHW1 = require("./modules/05-events/akardeon.js");
let eventsHW2 = require("./modules/05-events/drag-and-drop.js");

window.onload = () => {
	eventsHW1.akardeon();
	eventsHW2.dragAndDrop();
}
