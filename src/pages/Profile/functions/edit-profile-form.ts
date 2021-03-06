import { EditUserApi } from "../../../api/users";
import { executeAllChecks } from "../../../utils/validate";
import { getEditProfileFormData } from "./get-profile-form-data";

export function editProfile() {
  const formData = getEditProfileFormData();
  const valuesForCheck = [
    { name: "login", value: formData.login ?? "" },
    //{ name: "oldPassword", value: formData.oldPassword ?? "" },
    //{ name: "newPassword", value: formData.newPassword ?? "" },
    { name: "first_name", value: formData.first_name ?? "" },
    { name: "second_name", value: formData.second_name ?? "" },
    { name: "phone", value: formData.phone ?? "" },
    { name: "email", value: formData.email ?? "" },
  ];
  console.log(
    executeAllChecks(valuesForCheck)
      ? "Data ready to send!"
      : "Oh no! Maybe form has some errors",
    formData
  );
  EditUserApi.create(formData).then((data) => console.log(data));
}
