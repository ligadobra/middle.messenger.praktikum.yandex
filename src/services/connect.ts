import { Indexed } from "../types/indexed";
import { isEqual } from "../utils/isEqual";
import { Component } from "./component";
import store, { StoreEvents } from "./store";

export function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (ComponentWrapper: typeof Component) {
    return class extends ComponentWrapper {
      constructor(props) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        // подписываемся на событие
        store.on(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
}
