import { HTTPTransport } from "../services/fetch";
import { BaseAPI } from "./base-api";

const signUpAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2/auth"
);

export type TSignUpProps = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignInProps = {
  login: string;
  password: string;
};

export class SignUpApi extends BaseAPI {
  static async create(signUpProps: TSignUpProps) {
    return signUpAPIInstance
      .post("/signup", { data: signUpProps })
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}

export class SignInApi extends BaseAPI {
  static async create(signInProps: TSignInProps) {
    return signUpAPIInstance
      .post("/signin", { data: signInProps })
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}

export class LogoutApi extends BaseAPI {
  static async create() {
    return signUpAPIInstance
      .post("/logout")
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}
