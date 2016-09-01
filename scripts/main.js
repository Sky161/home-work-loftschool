/*
* Main file js
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';

const fs = require("fs");
const http = require("http");
const path = require("path");
let separator = "";
let content = "";

const readDir = (dirSearch) => {
  let dirs = fs.readdirSync(dirSearch);
  separator += "-";

  for (let dir of dirs) {
    dir = dirSearch + '/' + dir;
    let stat = fs.statSync(dir);
    let size = stat.size / 1024;

    if(stat.isDirectory()) {
      readDir(dir);
    }

    content += `${separator} ${dir} (${size}kb) \n`;
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  fs.access("." + req.url, fs.F_OK, function(err) {
    if (!err) {
      readDir("." + req.url);
      res.end(content);
      process.nextTick(() => {
        content = "";
        separator = "";
      });
    } else {
      res.end("Путь не найден!");
    }
  });
});

server.listen("7777", "localhost", () => {
  console.log("Сервер запущен по адресу http://localhost:7777");
});
