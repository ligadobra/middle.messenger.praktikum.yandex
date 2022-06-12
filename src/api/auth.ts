import { AppJsonHeader } from "../constants/api-headers";
import { signUpAPIInstance } from "../constants/api-instances";
import { TSignUpProps, TSignInProps } from "../types/request-data/auth";
import { BaseAPI } from "./base-api";

export class SignUpApi extends BaseAPI {
  static async create(signUpProps: TSignUpProps) {
    return signUpAPIInstance
      .post("/signup", {
        data: signUpProps,
        headers: AppJsonHeader,
      })
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}

export class SignInApi extends BaseAPI {
  static async create(signInProps: TSignInProps) {
    return signUpAPIInstance
      .post("/signin", {
        data: signInProps,
        headers: AppJsonHeader,
      })
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}

export class LogoutApi extends BaseAPI {
  static async create() {
    return signUpAPIInstance
      .post("/logout", { headers: AppJsonHeader })
      .then((data) => data)
      .catch((e) => console.log("error"));
  }
}
