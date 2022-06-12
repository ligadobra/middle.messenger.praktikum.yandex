export class SignUpDto {
  constructor(
    private _first_name: string,
    private _second_name: string,
    private _login: string,
    private _email: string,
    private _password: string,
    private _phone: string
  ) {}

  get first_name() {
    return this._first_name;
  }

  get second_name() {
    return this._second_name;
  }

  get login() {
    return this._login;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get phone() {
    return this._phone;
  }

  static of(obj?: any) {
    return new SignUpDto(
      obj.first_name ?? "",
      obj.second_name ?? "",
      obj.login ?? "",
      obj.email ?? "",
      obj.password ?? "",
      obj.phone ?? ""
    );
  }
}
