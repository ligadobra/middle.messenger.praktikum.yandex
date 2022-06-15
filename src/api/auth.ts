import { DefaultHeader } from "../constants/api-headers";
import { AuthAPIInstance } from "../constants/api-instances";
import { TSignUpProps, TSignInProps } from "../types/request-data/auth";
import { BaseAPI } from "./base-api";

export class SignUpApi extends BaseAPI {
  static create(signUpProps: TSignUpProps) {
    return AuthAPIInstance.post("/signup", {
      data: signUpProps,
      headers: DefaultHeader,
    })
      .then((response) => console.log(response))
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((e) => console.log("error"));
  }
}

export class SignInApi extends BaseAPI {
  static create(signInProps: TSignInProps) {
    return AuthAPIInstance.post("/signin", {
      data: signInProps,
      headers: DefaultHeader,
    })
      .then((response) => {})
      .then((data) => {
        return data;
      })
      .catch((e) => console.log("error"));
  }
}

export class LogoutApi extends BaseAPI {
  static create() {
    return AuthAPIInstance.post("/logout", DefaultHeader)
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}

export class GetUserApi extends BaseAPI {
  static create() {
    return AuthAPIInstance.get("/user", {
      headers: DefaultHeader,
    })
      .then((info) => {
        return { user: info };
      })
      .catch((e) => console.log("error"));
  }
}
