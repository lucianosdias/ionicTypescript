/// <reference path="../typings/main.d.ts" />
class DashCtrl {
    constructor() { }
}

class ChatsCtrl {
    public $inject = ['Chats'];
    chats: any[];
    constructor(public Chats: any) {
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
    chat: Object;
    constructor(
        public Chats: any,
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
