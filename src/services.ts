/// <reference path="../typings/main.d.ts" />
module Services {
    export interface IChatUser {
        id: Number;
        name: String;
        lastText: String;
        face: String;
    }

    export interface IChatsService {
        all(): Array<IChatUser>;
        remove(chat: IChatUser);
        get(chatId: string): IChatUser;
    }

    export class Chats implements IChatsService {
        chats: Array<IChatUser>;
        constructor() {
            this.chats = [{
                id: 0,
                name: 'Ben Sparrow',
                lastText: 'You on your way?',
                face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            }, {
                    id: 1,
                    name: 'Max Lynx',
                    lastText: 'Hey, it\'s me',
                    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                }, {
                    id: 2,
                    name: 'Adam Bradleyson',
                    lastText: 'I should buy a boat',
                    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                }, {
                    id: 3,
                    name: 'Perry Governor',
                    lastText: 'Look at my mukluks!',
                    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
                }, {
                    id: 4,
                    name: 'Mike Harrington',
                    lastText: 'This is wicked good ice cream.',
                    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                }];
        }

        all() {
            return this.chats;
        };
        remove(chat) {
            this.chats.splice(this.chats.indexOf(chat), 1);
        };
        get(chatId) {
            for (var i = 0; i < this.chats.length; i++) {
                if (this.chats[i].id === parseInt(chatId)) {
                    return this.chats[i];
                }
            }
            return null;
        };
    }
}

angular.module('starter.services', []).service('Chats', Services.Chats);
