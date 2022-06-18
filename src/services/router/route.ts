import { isEqual } from "../../utils/isEqual";
import { Component } from "../component/component";
import render from "../render";

export class Route {
  private _pathname: any;
  private _blockClass: any;
  private _block: any;
  private _props: any;

  constructor(pathname: any, view: any, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.getContent().remove();
    }
  }

  match(pathname: any) {
    return isEqual(pathname, this._pathname);
  }

  render(route?: any) {
    if (!this._block) {
      this._block = this._blockClass;
    }

    const root = document.querySelector(this._props.rootQuery);

    if (!root) {
      throw new Error("Root not found");
    }
    
    root.innerHTML = "";
    root.appendChild(this._block.getContent());
  }
}
