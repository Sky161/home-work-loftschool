/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const fs = require("fs");
let separator = "";

const readDir = (dirSearch) => {
  let dirs = fs.readdirSync(dirSearch);
  separator += "-";

  for (let dir of dirs) {
    dir = dirSearch + '/' + dir;
    let stat = fs.statSync(dir);
    let size = stat.size / 1024;

    console.log(`${separator} ${dir} (${size}kb)`);

    if(stat.isDirectory()) {
      readDir(dir);
    }
  }
}

readDir("./scripts");
