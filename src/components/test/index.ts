import { Component } from "../../services/component/component";

export default class Test extends Component {
  render(): object {
    return this.compile(() => {
      return "<span>test</span>";
    });
  }
}
