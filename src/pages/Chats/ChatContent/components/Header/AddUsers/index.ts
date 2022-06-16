import { Component } from "../../../../../../services/component";
import tpl from "./add-user-to-chat";

export default class AddUsersToChat extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
