import { HTTPTransport } from "../services/fetch";

export const AuthAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/auth"
);

export const UsersAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/user"
);