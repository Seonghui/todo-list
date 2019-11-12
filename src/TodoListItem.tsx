import React, { useState, ChangeEvent } from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  editTodo,
  deleteTodo
}) => {
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    editTodo(todo, newText);
  };

  const handleToggleEdit = (e: React.MouseEvent<HTMLElement>) => {
    setIsEditing(!isEditing);
  };
  if (isEditing) {
    return (
      <li>
        <label className={todo.complete ? "complete" : undefined}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />
          <input type="text" value={newText} onChange={handleChange} />
          <button onClick={handleEdit}>완료</button>
        </label>
      </li>
    );
  }

  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
        <button onClick={handleToggleEdit}>수정</button>
        <button onClick={() => deleteTodo(todo)}>삭제</button>
      </label>
    </li>
  );
};
