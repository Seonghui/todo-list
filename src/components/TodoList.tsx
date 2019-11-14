import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todoItems: Array<Todo>;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
  filter: string;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoItems,
  toggleTodo,
  editTodo,
  deleteTodo,
  filter
}) => {
  const completedItems = todoItems.filter(todo => todo.complete);
  const notCompletedItems = todoItems.filter(todo => !todo.complete);

  return (
    <ul className="todo-list">
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
  );
};
