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

                const getPhotos = (id) => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            this.callApi('photos.get', {v: 5.53, album_id: id, extended: 1}).then((photo) => {
                                photo.items.forEach((item) => {
                                    photos.push(item);
                                });
                            });
                            resolve();
                        }, 1000);
                    });
                };

                getPhotos("profile")
                    .then(() => { return getPhotos("wall") })
                    .then(() => {
                        return album.items.forEach((item) => {
                            getPhotos(item.id);
                        });
                    })
                    .then(() => { return getPhotos("saved") })
                    .then(() => { resolve(photos) });
            });
        });
    }
};
