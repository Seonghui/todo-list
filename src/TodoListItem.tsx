import React, { useState, ChangeEvent } from "react";
import "./TodoListItem.css";
import moment from 'moment';

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
    setIsEditing(!isEditing);
  };

  const handleToggleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {isEditing && (
          <React.Fragment>
            <input type="text" value={newText} onChange={handleChange} />
            <button onClick={handleEdit}>완료</button>
          </React.Fragment>
        )}
        {!isEditing && (
          <React.Fragment>
            {todo.text}
            <button onClick={handleToggleEdit}>수정</button>
            {todo.complete && <button onClick={() => deleteTodo(todo)}>삭제</button>}
          </React.Fragment>
        )}
      </label>
      {moment(todo.date).format('YYYY년 MM월 DD일')} {moment(todo.date).format('HH시 mm분')}
    </li>
  );
};
