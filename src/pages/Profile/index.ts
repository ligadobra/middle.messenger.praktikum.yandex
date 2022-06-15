import { Component } from "../../services/component";
import { connect } from "../../services/connect";
import tpl from "./profile";

class Profile extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapProfileToProps(state: any) {
  return {};
}

export default connect(Profile, mapProfileToProps);
