import { HTTPTransport } from "../services/fetch";

export const signUpAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/auth"
);
