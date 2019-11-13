import modules, { StoreState } from "./modules";
import { createStore, Store } from "redux";
import { loadState, saveState } from '../utils/localStorage'

export default function configureStore(): Store<StoreState> {
  const persistedState = loadState();
  const store = createStore(
    modules,
    persistedState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    });
  });
  return store;
}
