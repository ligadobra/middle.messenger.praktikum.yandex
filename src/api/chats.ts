import { DefaultHeader } from "../constants/api-headers";
import { ChatsAPIInstance } from "../constants/api-instances";
import store from "../services/store";
import { BaseAPI } from "./base-api";

export class GetChatsApi extends BaseAPI {
  static create() {
    return ChatsAPIInstance.get("", {
      headers: DefaultHeader,
    }).catch((e) => console.log("error"));
  }
}

export class CreateChatsApi extends BaseAPI {
  static create(title: string) {
    return ChatsAPIInstance.post("", {
      data: { title },
      headers: DefaultHeader,
    })
      .then((info) => {})
      .catch((e) => console.log("error"));
  }
}

export class DeleteChatsApi extends BaseAPI {
  static create(chatId: number) {
    return ChatsAPIInstance.delete("", {
      data: { chatId },
      headers: DefaultHeader,
    }).catch((e) => console.log("error"));
  }
}

export class AddUsersToChatApi extends BaseAPI {
  static create(props: { users: string[]; chatId: number }) {
    return ChatsAPIInstance.put("/users", {
      data: props,
      headers: DefaultHeader,
    })
      .then((info) => {})
      .catch((e) => console.log("error"));
  }
}

export class ChangeChatAvatarApi extends BaseAPI {
  static create(avatar: any) {
    return ChatsAPIInstance.put("/avatar", {
      data: avatar,
      isFile: true,
    }).catch((e) => console.log("error"));
  }
}
