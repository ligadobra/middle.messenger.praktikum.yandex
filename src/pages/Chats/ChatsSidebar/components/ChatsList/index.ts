import { Component } from "../../../../../services/component/component";
import { connect } from "../../../../../services/connect";
import tpl from "./chats-list";

class ChatsList extends Component {
  render(): object {
    return this.compile(tpl);
  }
}

function mapStateToProps(state: any) {
  return { chats: state.chats };
}

export default connect(ChatsList, mapStateToProps);
