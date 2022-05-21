import { Component } from "../../../services/component";
import tpl from "./chats-sidebar";

export default class ChatsSidebar extends Component {
  render() {
    return this.compile(tpl);
  }
}
