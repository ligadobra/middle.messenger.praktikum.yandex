import { Component } from "../../services/component";
import { connect } from "../../services/connect";
import tpl from "./chats";

class Chats extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state: any) {
  return {
    chats: state.chats,
  };
}

export default connect(Chats, mapStateToProps);
