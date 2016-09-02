var Model = {
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function() {
        return this.callApi('users.get', {});
    },
    getMusic: function() {
        return this.callApi('audio.get', {});
    },
    getFriends: function() {
        return this.callApi('friends.get', {fields: 'photo_100'});
    },
    getNews: function() {
        return this.callApi('newsfeed.get', {filters: 'post', count: 20});
    },
    getGroup: function() {
        return this.callApi('groups.get', {extended: 1, v: 5.53});
    },
    getPhoto: function() {
      return this.callApi('photos.getAlbums', {v: 5.53}).then((album) => {
        return new Promise((resolve) => {
          let photos = [];

          album.items.unshift({id:"profile"}, {id:"saved"}, {id:"wall"});

          const getPhotos = (items) => {
            return new Promise((resolve) => {
              let checkTimer = 0;
              items.forEach((item, i) => {
                setTimeout(() => {
                  this.callApi('photos.get', {v: 5.53, album_id: item.id, extended: 1}).then((photosGet) => {
                    photosGet.items.forEach((photo) => {
                      photos.push(photo);
                    });
                  });
                  console.log("Загружен альбом - " + checkTimer);
                  checkTimer++;
                  if(checkTimer == items.length) {
                    resolve();
                  }
                }, i * 1000);
              });
            });
          };

          getPhotos(album.items)
            .then(() => {
              console.log("Конец.");
              resolve(photos);
            });
        });
      });
  }
};
