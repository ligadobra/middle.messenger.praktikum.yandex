export function checkLogin(e: any) {
  const element: string = e.target.value;
  const maxLength = 20;
  const minLength = 3;
  const validStrFormat = new RegExp(/(?!^\d+$)^[a-zA-Z0-9-_]+$/);

  const isOkLength = element.length <= maxLength && element.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("login", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkPassword(e: any) {
  const element: string = e.target.value;
  const maxLength = 40;
  const minLength = 8;
  const validStrFormat = new RegExp(/(?=.*\d)(?=.*[A-Z])/);

  const isOkLength = element.length <= maxLength && element.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("password", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkName(e: any) {
  const element: string = e.target.value;
  const validStrFormat = new RegExp(/^[A-ZА-Я]+[a-zA-Zа-яА-Я-]+$/);

  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("name", isOkFormat);

  return isOkFormat;
}

export function checkPhone(e: any) {
  const element: string = e.target.value;
  const maxLength = 15;
  const minLength = 10;
  const validStrFormat = new RegExp(/^(?:(\+))?[0-9]+$/);

  const isOkLength = element.length <= maxLength && element.length >= minLength;
  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("phone", isOkLength && isOkFormat);

  return isOkLength && isOkFormat;
}

export function checkEmail(e: any) {
  const element: string = e.target.value;
  const validStrFormat = new RegExp(/(?=.[a-zA-Z]+\@+[a-zA-Z]+\.+[a-zA-Z])/);

  const isOkFormat = validStrFormat.test(element);

  findAndShineElement("email", isOkFormat);

  return isOkFormat;
}

export function checkMessage(e: any) {
  const element: string = e.target.value;

  const isNotEmpty = element.length !== 0;

  findAndShineElement("message", isNotEmpty);

  return isNotEmpty;
}

function findAndShineElement(elName: string, result: boolean) {
  const elementRoot = document.getElementsByClassName("input");

  for (let i = 0; i < elementRoot.length; i++) {
    const currentElementName =
      elementRoot[i].getElementsByTagName("input")[0].name;
    const currentElement = elementRoot[i].getElementsByTagName("input")[0];
    if (currentElementName === elName) {
      if (result) {
        if (currentElement.classList.contains("input__wrong")) {
          currentElement.classList.remove("input__wrong");
        }
        currentElement.classList.add("input__ok");
        return;
      }

      if (currentElement.classList.contains("input__ok")) {
        currentElement.classList.remove("input__ok");
      }
      currentElement.classList.add("input__wrong");
    }
  }
}
