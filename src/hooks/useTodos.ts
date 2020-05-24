import { StoreState } from "../store/modules";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { todosActions } from "../store/modules/todos";

export default function useTodos() {
  const dispatch = useDispatch();

  const todoItems = useSelector((state: StoreState) => state.todos.todoItems);
  const input = useSelector((state: StoreState) => state.todos.input);

  const addTodo = useCallback(input => dispatch(todosActions.create(input)), [
    dispatch
  ]);

  const toggleTodo = useCallback(todo => dispatch(todosActions.toggle(todo)), [
    dispatch
  ]);

  const deleteTodo = useCallback(todo => dispatch(todosActions.remove(todo)), [
    dispatch
  ]);

  const editTodo = useCallback(
    (todo, input) => dispatch(todosActions.edit(todo, input)),
    [dispatch]
  );

  const changeInput = useCallback(
    input => dispatch(todosActions.changeInput(input)),
    [dispatch]
  );

  return {
    todoItems,
    input,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    changeInput
  };
}
