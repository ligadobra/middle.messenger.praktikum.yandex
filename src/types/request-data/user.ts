export type TUserEdit = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export type TUserPassword = {
  oldPassword: string;
  newPassword: string;
};

export type TAvatar = {
  avatar?: FormData;
};
