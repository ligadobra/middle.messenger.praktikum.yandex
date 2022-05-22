import { Component } from "../../../../../services/component";
import tpl from "./chat-content-messages";

export default class ChatBody extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
