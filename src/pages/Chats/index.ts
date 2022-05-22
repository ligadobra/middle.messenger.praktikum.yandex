import { Component } from "../../services/component";
import tpl from "./chats";

export default class Chats extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
