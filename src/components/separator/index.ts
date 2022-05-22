import { Component } from "../../services/component";
import tpl from "./separator";

export default class Separator extends Component {
    render(): object {
        return this.compile(tpl);
    }
}