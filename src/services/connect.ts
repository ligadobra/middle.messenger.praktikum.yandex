import { Indexed } from "../types/indexed";
import { Component } from "./component/component";
import store, { StoreEvents } from "./store";

export function connect(
  Block: typeof Component,
  mapStateToProps: (state: Indexed) => Indexed
) {
  return class extends Block {
    constructor(tag: string, props: any) {
      super(tag, { ...props, ...mapStateToProps(store.getState()) });

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
