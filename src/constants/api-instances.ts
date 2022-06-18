import { HTTPTransport } from "../services/fetch/fetch";

export const AuthAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/auth"
);

export const UsersAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/user"
);

export const ChatsAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/chats"
);

export const TestAPIInstance = new HTTPTransport(
  "https://httpbin.org"
);

export const WSChats = "wss://ya-praktikum.tech/ws/chats";
