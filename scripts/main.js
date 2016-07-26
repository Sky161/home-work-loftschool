/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

//Fourth home work
const fourthHW1 = require("./modules/fourth-home-work/prepend.js");
const fourthHW2 = require("./modules/fourth-home-work/deleteTextNodes.js");

fourthHW1.prepend(".target", ".move-paragraph");
fourthHW2.deleteTextNodes(".delete-container");
