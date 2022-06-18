import { expect } from "chai";
import Handlebars from "handlebars";
import { JSDOM } from "jsdom";

describe.only("handlebars", () => {
  beforeEach(() => {
    const dom = new JSDOM('<div class="app"></div>', {
      url: "http://localhost:3000",
    });
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  it(".compile", () => {
    const source = "<div id={{id}}>{{name}}</div>";
    const data = { name: "Игорь", id: "123" };
    const template = Handlebars.compile(source);
    const templateRes = template(data);

    const element = document.createElement("div");
    element.innerHTML = templateRes;

    const a = element.children[0].id + " " + element.children[0].textContent;

    expect(a).to.eq("123 Игорь");
  });
});
