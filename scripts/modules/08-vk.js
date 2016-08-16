/*
* Script work from vk
*
* @author Andrey Chechkin
* @license GNU/AGPLv3
* @see {@link https://www.gnu.org/licenses/agpl-3.0.txt|License}
*/
'use strict';
const handlebars = require("handlebars");

module.exports = () => {
	let container = document.getElementById("list-friends");

	if(container) {
		return new Promise((resolve, reject) => {
			VK.init({
				apiId: 5588599
			});

			VK.Auth.getLoginStatus(function(response) {
				if(response.session){
					resolve();
				}
			});

			VK.Auth.login((response) => {
				if(response.status == "connected"){
					resolve();
				}else{
					reject(new Error("Пользователь не авторизован!"));
				}
			}, 2);
		}).then(() => {
			return new Promise((resolve) => {
				VK.api("friends.get", {fields: "bdate,photo_100"}, (friends) => {
					let friendsObj = friends.response;
					let friendsObjOffDate = [];
					let friendsObjMonthBefore = [];
					let friendsObjMonthAfter = [];

					for(let item in friendsObj) {
						let thisItem = friendsObj[item];
						let bdate = thisItem.bdate;
						let date = new Date();
						let year = date.getFullYear();
						let month = date.getMonth();

						thisItem.age = "не указан";
						thisItem.arrBdate = [];

						if(bdate) {
							thisItem.arrBdate = bdate.split(".");

							if(thisItem.arrBdate[2]) {
								thisItem.age = year - thisItem.arrBdate[2];
							}

						}

						if(thisItem.arrBdate[1]){
							thisItem.UnixDate = `2016-${thisItem.arrBdate[1]}-${thisItem.arrBdate[0]}`;

							if(thisItem.arrBdate[1] <= month) {
								friendsObjMonthBefore.push(thisItem);
							}else{
								friendsObjMonthAfter.push(thisItem);
							}
						}else{
							friendsObjOffDate.push(thisItem);
						}
					}

					const SortDate = (data) => {
						data.sort((a, b) => {
							let aParse = Date.parse(a.UnixDate);
							let bParse = Date.parse(b.UnixDate);

							if(aParse > bParse){
								return -1;
							}else{
								return 1;
							}

							return 0
						});

						return data;
					};

					friendsObjMonthBefore = SortDate(friendsObjMonthBefore);
					friendsObjMonthAfter = SortDate(friendsObjMonthAfter);

					let res = friendsObjMonthBefore.concat(friendsObjMonthAfter).concat(friendsObjOffDate);

					resolve(res);
				});
			});
		}).then((friendsObj) => {
			return new Promise((resolve) => {
				let tmpHtml = document.getElementById("friends-template").innerHTML;
				let tmpCompile = handlebars.compile(tmpHtml);
				let result = tmpCompile({"friends": friendsObj});
				let friendsContainer = document.getElementById("list-friends");

				friendsContainer.innerHTML = result;
				resolve();
			});
		}).catch((e) => {
			alert(`Ошибка - ${e.message}`);
		});
	}
}
