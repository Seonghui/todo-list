import { combineReducers } from "redux";
import { TodoState, todosReducer } from "./todos";
import { FilterState, filterReducer } from "./filter";
import { ModalState, modalReducer } from "./modal";
import { AlertState, alertReducer } from "./alert";

export interface StoreState {
  todos: TodoState;
  filter: FilterState;
  modal: ModalState;
  alert: AlertState;
}

export default combineReducers<StoreState>({
  todos: todosReducer,
  filter: filterReducer,
  modal: modalReducer,
  alert: alertReducer,
});
