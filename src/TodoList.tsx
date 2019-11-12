import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todoItems: Array<Todo>;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoItems,
  toggleTodo,
  editTodo,
  deleteTodo
}) => {
  return (
    <ul>
      {todoItems.map(todo => {
        return (
          <TodoListItem
            key={todo.text}
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
