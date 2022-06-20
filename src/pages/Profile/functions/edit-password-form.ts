import { ChangePasswordApi } from "../../../api/users";
import { executeAllChecks } from "../../../utils/validate";
import { getPasswordFormData } from "./get-profile-form-data";

export function editPassword() {
  const formData = getPasswordFormData();
  const valuesForCheck = [
    { name: "oldPassword", value: formData.oldPassword ?? "" },
    { name: "newPassword", value: formData.newPassword ?? "" },
  ];
  console.log(
    executeAllChecks(valuesForCheck)
      ? "Data ready to send!"
      : "Oh no! Maybe form has some errors",
    formData
  );
  ChangePasswordApi.create(formData).then((data) => console.log(data));
}
