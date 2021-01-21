const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: 'Hi how are you', likesCount: 15},
                {id: 2, post: 'I\'m fine, thanks', likesCount: 20},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valeriy'},
            ],
            messages: [
                {id: 1, message: 'Hi', mine: false},
                {id: 2, message: 'How are you', mine: false},
                {id: 3, message: 'Yo', mine: false},
                {id: 4, message: 'Yo', mine: true},
                {id: 5, message: 'My friend', mine: true},
                {id: 6, message: `It's a new cool chat, dude!`, mine: true},
            ],
        },
        navbarPage: {
            friends: [
                {id: 1, img: 'https://s0.rbk.ru/v6_top_pics/media/img/8/22/755895443908228.jpg'},
                {
                    id: 2,
                    img: 'https://www.moya-planeta.ru/upload/images/xl/19/a7/19a713c5edb6c69c5a0c31b875d732b3.jpg'
                },
                {id: 3, img: 'https://brammels.com/wp-content/uploads/2018/06/krasivye-lyudi-umnee.jpg'},
                {id: 4, img: 'https://www.kino-teatr.ru/art/5823/82736.jpg'}
            ]

        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        const newPost = {
            id: 3,
            post: this.getState().profilePage.newPostText,
            likesCount: 1
        };
        this.getState().profilePage.posts.push(newPost);
        this.getState().profilePage.newPostText = "";
        this._callSubscriber(this);
    },
    _updateNewPostText(newText) {
        this.getState().profilePage.newPostText = newText;
        this._callSubscriber(this);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    }
};

export default store;
