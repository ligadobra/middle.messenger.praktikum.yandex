import { Component } from "../../../../../../services/component";
import tpl from "./chat-content-header-avatar";

export default class ChatContentAvatar extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
