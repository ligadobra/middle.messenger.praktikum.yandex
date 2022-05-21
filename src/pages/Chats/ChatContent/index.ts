import { Component } from "../../../services/component";
import tpl from "./chat-content";

export default class ChatContent extends Component {
    render(): string {
        return this.compile(tpl);
    }
}