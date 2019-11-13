import { combineReducers } from "redux";
import { TodoState, todosReducer as todos } from "./todos";
import { FilterState, filterReducer as filter } from "./filter";

export interface StoreState {
  todos: TodoState;
  filter: FilterState;
}

export default combineReducers<StoreState>({
  todos,
  filter
});
