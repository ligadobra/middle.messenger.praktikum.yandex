import { DefaultHeader } from "../constants/api-headers";
import { ChatsAPIInstance } from "../constants/api-instances";
import { BaseAPI } from "./base-api";

export class GetChatTokenApi extends BaseAPI {
  static create(chatId: number) {
    return ChatsAPIInstance.post(`/token/${chatId}`, {
      headers: DefaultHeader,
    }).catch((e) => console.log("error"));
  }
}
