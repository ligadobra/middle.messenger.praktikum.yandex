import { Component } from "../../services/component";
import { TUser } from "../../types/request-data/auth";
import tpl from "./default.layout";

export default class DefaultLayout extends Component {

  static mapUserToProps(state): TUser {
    return {
      id: state.user.id,
      first_name: state.user.name,
      second_name: state.user.avatar,
      display_name: state.user.display_name,
      login: state.user.login,
      email: state.user.email,
      phone: state.user.phone,
      avatar: state.user.avatar,
    };
  }

  render(): object {
    return this.compile(tpl);
  }
}
