import { GetUserApi } from "../api/auth";
import store from "../services/store";

export class UserController {
  static async getUser(): Promise<any> {
    return GetUserApi.create().then((data: any) =>
      store.set("user", JSON.parse(data.user.response))
    );
  }
}
