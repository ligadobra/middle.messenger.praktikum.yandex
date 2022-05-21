import { Component } from "../../services/component";
import tpl from "./chats";

export default class Chats extends Component {
  render() {
    return this.compile(tpl);
  }
}
