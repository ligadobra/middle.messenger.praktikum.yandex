import { Component } from "../../services/component";
import "../../components/button";
import tpl from './auth.layout';

export default class AuthLayout extends Component {
  render(): object {
    return this.compile(tpl);
  }
}
