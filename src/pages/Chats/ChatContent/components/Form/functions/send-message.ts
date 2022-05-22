import { executeAllChecks } from "../../../../../../utils/validate";
import { getMessageFormData } from "./get-send-message-data";

export function SendMessage() {
  const formData = getMessageFormData();
  const valuesForCheck = [{ name: "message", value: formData.message ?? "" }];
  console.log(
    executeAllChecks(valuesForCheck)
      ? "Data ready to send!"
      : "Oh no! Maybe form has some errors",
    formData
  );
}
