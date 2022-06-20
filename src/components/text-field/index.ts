import { currentPath } from "../../constants/system";
import routes from "../../routes";
import { Component } from "../../services/component/component";
import { connect } from "../../services/connect";
import {
  checkEmail,
  checkLogin,
  checkMessage,
  checkName,
  checkPassword,
  checkPhone,
} from "../../utils/validate";
import tpl from "./text-field";

function mapStateToProps(state: any) {
  if (currentPath === routes.settings) {
    const nodes: any = document.getElementsByTagName("input");

    for (let i = 0; i < nodes.length; ++i) {
      if (nodes[i]["name"] === "first_name") {
        nodes[i].value = state.user.first_name;
      }

      if (nodes[i]["name"] === "second_name") {
        nodes[i].value = state.user.second_name;
      }

      if (nodes[i]["name"] === "display_name") {
        nodes[i].value = state.user.display_name;
      }

      if (nodes[i]["name"] === "phone") {
        nodes[i].value = state.user.phone;
      }

      if (nodes[i]["name"] === "email") {
        nodes[i].value = state.user.email;
      }

      if (nodes[i]["name"] === "login") {
        nodes[i].value = state.user.login;
      }
    }
  }

  return {};
}

class TextField extends Component {
  constructor(...props) {
    super(...props);
    this.checkField(this.getContent().getElementsByTagName("input")[0].name);
  }

  private checkField(elementName: string) {
    switch (elementName) {
      case "login":
        this.addEvents(["focusin", "focusout"], checkLogin);
        break;
      case "password":
        this.addEvents(["focusin", "focusout"], checkPassword);
        break;
      case "first_name":
        this.addEvents(["focusin", "focusout"], checkName);
        break;
      case "second_name":
        this.addEvents(["focusin", "focusout"], checkName);
        break;
      case "phone":
        this.addEvents(["focusin", "focusout"], checkPhone);
        break;
      case "email":
        this.addEvents(["focusin", "focusout"], checkEmail);
        break;
      case "message":
        this.addEvents(["focusin", "focusout"], checkMessage);
        break;
    }
  }

  render(): object {
    return this.compile(tpl);
  }
}

export default connect(TextField, mapStateToProps);
