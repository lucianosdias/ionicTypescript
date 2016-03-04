/// <reference path="../typings/main.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {
    constructor() { }
}

class ChatsCtrl {
    public $inject = ['Chats'];
    chats: Services.IChatUser[];
    constructor(public Chats: Services.Chats) {
        this.chats = Chats.all();
    }
    remove(chat) {
        this.Chats.remove(chat);
    }
}

interface IStateParams extends ng.ui.IStateParamsService {
    chatId: string;
}

class ChatDetailCtrl {
    public $inject = ['Chats', '$stateParams'];
    chat: Services.IChatUser;
    constructor(
        public Chats: Services.Chats,
        public $stateParams: IStateParams) {
        this.chat = Chats.get($stateParams.chatId);
    }
}

class AccountCtrl {
    settings: Object;
    constructor() {
        this.settings = {
            enableFriends: true
        };
    }
}

angular.module('starter.controllers', [])
    .controller('DashCtrl', DashCtrl)
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl)
    .controller('AccountCtrl', AccountCtrl);
