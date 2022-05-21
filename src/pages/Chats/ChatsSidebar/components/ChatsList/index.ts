import { Component } from "../../../../../services/component";
import tpl from "./chats-list";

export default class ChatsList extends Component {
  render(): string {
    return this.compile(tpl);
  }
}
