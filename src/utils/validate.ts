function findAndShineElement(elName: string, result: boolean) {
  const elementRoot = document.getElementsByTagName("input");

  for (let i = 0; i < elementRoot.length; i++) {
    const currentElementName = elementRoot[i].name;
    const currentElement = elementRoot[i];
    if (currentElementName === elName) {
      if (result === true) {
        if (currentElement.classList.contains("input__wrong")) {
          currentElement.classList.remove("input__wrong");
        }
        currentElement.classList.add("input__ok");
      } else if (result === false) {
        if (currentElement.classList.contains("input__ok")) {
          currentElement.classList.remove("input__ok");
        }
        currentElement.classList.add("input__wrong");
      }
    }
  }
}

export function checkLogin(e?: any, value?: string) {
  let element: string = "";

  if (e) {
    element = e.target?.value;
  } else if (value) {
    element = value;
  }

  const maxLength = 20;
  const minLength = 3;
  const validStrFormat = new RegExp(/(?!^\d+$)^[a-zA-Z0-9-_]+$/);

  const isOkLength = element?.length <= maxLength && element?.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("login", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkPassword(e?: any, value?: string) {
  let element: string = "";

  if (e) {
    element = e.target?.value;
  } else if (value) {
    element = value;
  }

  const maxLength = 40;
  const minLength = 8;
  const validStrFormat = new RegExp(/(?=.*\d)(?=.*[A-Z])/);

  const isOkLength = element?.length <= maxLength && element?.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("password", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkName(e?: any, value?: string, name?: string) {
  let element: string = "";

  if (e) {
    element = e.target.value;
  } else if (value) {
    element = value;
  }

  const validStrFormat = new RegExp(/^[A-ZА-Я]+[a-zA-Zа-яА-Я-]+$/);

  const isOkFormat = validStrFormat.test(element);

  if (name === "first_name") {
    findAndShineElement("first_name", isOkFormat);
  } else if (name === "second_name") {
    findAndShineElement("second_name", isOkFormat);
  } else if (e.target.name === "first_name") {
    findAndShineElement("first_name", isOkFormat);
  } else if (e.target.name === "second_name") {
    findAndShineElement("second_name", isOkFormat);
  }

  return isOkFormat;
}

export function checkPhone(e?: any, value?: string) {
  let element: string = "";

  if (e) {
    element = e.target.value;
  } else if (value) {
    element = value;
  }

  const maxLength = 15;
  const minLength = 10;
  const validStrFormat = new RegExp(/^(?:(\+))?[0-9]+$/);

  const isOkLength = element.length <= maxLength && element.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("phone", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkEmail(e?: any, value?: string) {
  let element: string = "";

  if (e) {
    element = e.target.value;
  } else if (value) {
    element = value;
  }

  const validStrFormat = new RegExp(/(?=.[a-zA-Z]+\@+[a-zA-Z]+\.+[a-zA-Z])/);

  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("email", isOkFormat);

  return isOkFormat;
}

export function checkMessage(e?: any, value?: string) {
  let element: string = "";

  if (e) {
    element = e.target.value;
  } else if (value) {
    element = value;
  }

  const isNotEmpty = element.length !== 0;

  findAndShineElement("message", isNotEmpty);

  return isNotEmpty;
}

export function executeAllChecks(values: { name: string; value: string }[]) {
  const resultCheckingArray: boolean[] = [];
  values.forEach((value: { name: string; value: string }) => {
    switch (value.name) {
      case "login":
        resultCheckingArray.push(checkLogin(undefined, value.value));
        break;
      case "password":
        resultCheckingArray.push(checkPassword(undefined, value.value));
        break;
      case "oldPassword":
        resultCheckingArray.push(checkPassword(undefined, value.value));
        break;
      case "newPassword":
        resultCheckingArray.push(checkPassword(undefined, value.value));
        break;
      case "first_name":
        resultCheckingArray.push(
          checkName(undefined, value.value, "first_name")
        );
        break;
      case "second_name":
        resultCheckingArray.push(
          checkName(undefined, value.value, "second_name")
        );
        break;
      case "phone":
        resultCheckingArray.push(checkPhone(undefined, value.value));
        break;
      case "email":
        resultCheckingArray.push(checkEmail(undefined, value.value));
        break;
      case "message":
        resultCheckingArray.push(checkMessage(undefined, value.value));
        break;
    }
  });

  return resultCheckingArray.every((item) => item === true);
}
