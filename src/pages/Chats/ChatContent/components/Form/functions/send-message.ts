import { checkMenuClick } from "../../../../../../functions/check-menu-click";
import { WSModel } from "../../../../../../services/websockets";
import { executeAllChecks } from "../../../../../../utils/validate";
import { getMessageFormData } from "./get-send-message-data";

export function SendMessage() {
  const formData = getMessageFormData();
  const valuesForCheck = [{ name: "message", value: formData.message ?? "" }];
  if (executeAllChecks(valuesForCheck)) {
    WSModel.instance.send(
      JSON.stringify({
        content: formData.message,
        type: "message",
      })
    );

    setTimeout(() => {
      checkMenuClick();
    }, 1000);
  }
}
