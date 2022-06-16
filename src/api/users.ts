import { DefaultHeader } from "../constants/api-headers";
import { UsersAPIInstance } from "../constants/api-instances";
import { TUserEdit, TUserPassword } from "../types/request-data/user";
import { BaseAPI } from "./base-api";

export class EditUserApi extends BaseAPI {
  static create(userProps: TUserEdit) {
    return UsersAPIInstance.put("/profile", {
      data: userProps,
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

export class ChangePasswordApi extends BaseAPI {
  static create(userPassword: TUserPassword) {
    return UsersAPIInstance.put("/password", {
      data: userPassword,
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

export class ChangeAvatarApi extends BaseAPI {
  static create(avatar: FormData) {
    console.log("tut");
    return UsersAPIInstance.put("/profile/avatar", {
      data: avatar,
      isFile: true,
    }).catch((e) => console.log("error"));
  }
}
