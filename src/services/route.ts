import { isEqual } from "../utils/isEqual";
import render from "../utils/render";

export class Route {
  private _pathname: any;
  private _blockClass: any;
  private _block: any;
  private _props: any;

  constructor(pathname: string, view: any, props: any) {
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
      this._block.hide();
    }
  }

  match(pathname: any) {
    return isEqual(pathname, this._pathname);
  }

  render(route?: any) {
    if (!this._block) {
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      if(route) {
        this._block.show();
      }
      return;
    }

    this._block.show();
  }
}
