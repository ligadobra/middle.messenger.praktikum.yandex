import { Component } from "../../../../../services/component/component";
import tpl from "./chat-content-header";

export default class ChatContentHeader extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
