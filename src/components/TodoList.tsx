import React from "react";
import { TodoListItem } from "./TodoListItem";
import useTodos from "../hooks/useTodos";
import useFilter from "../hooks/useFilter";

export const TodoList: React.FC = () => {
  const { todoItems, toggleTodo, editTodo, deleteTodo } = useTodos();
  const { filter } = useFilter();
  const completedItems = todoItems.filter(todo => todo.complete);
  const notCompletedItems = todoItems.filter(todo => !todo.complete);

  const NoneText = () => {
    if (filter === "all" && !completedItems.length && !notCompletedItems.length)
      return <p className="todo-none-text">할 일이 없습니다.</p>;
    if (filter === "active" && !notCompletedItems.length)
      return <p className="todo-none-text">미완료된 일이 없습니다.</p>;
    if (filter === "completed" && !completedItems.length)
      return <p className="todo-none-text">완료된 일이 없습니다.</p>;
    else {
      return null;
    }
  };

  return (
    <div className="todo-list">
      <NoneText />
      <ul>
        {(filter === "active" || filter === "all") &&
          notCompletedItems.reverse().map(todo => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        {(filter === "completed" || filter === "all") &&
          completedItems.reverse().map(todo => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </ul>
    </div>
  );
};
