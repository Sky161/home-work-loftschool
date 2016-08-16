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

					for(let item in friendsObj) {
						let thisItem = friendsObj[item];
						let bdate = thisItem.bdate;

						thisItem.age = "не указан";
						thisItem.arrBdate = [];

						if(bdate) {
							friendsObj[item].arrBdate = bdate.split(".");
							let year = new Date().getFullYear();

							if(thisItem.arrBdate[2]) {
								thisItem.age = year - thisItem.arrBdate[2];
							}

						}
					}

					let friendsObjOnDate = friendsObj.filter((item) => {
						if(item.arrBdate[0] && item.arrBdate[1]){
							return item;
						}
					});

					let friendsObjOffDate = friendsObj.filter((item) => {
						if(item.arrBdate.length == 0){
							return item;
						}
					});

					let res = friendsObjOnDate.concat(friendsObjOffDate);

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
