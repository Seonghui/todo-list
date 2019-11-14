import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import moment from "moment";

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

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.style.height = `${current.scrollHeight}px`
    }
  })

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, scrollHeight } = e.target;
    const { current } = ref;

    setNewText(value);

    // textarea 스크롤 길이 변경
    if (current) {
      current.style.height = 'auto'
      current.style.height = `${scrollHeight}px`
    }
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

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    setNewText(todo.text);
  };
  return (
    <li className="todo-list-item">
      <div className={`item-header${todo.complete ? " complete" : ""}`}>
        <input
          id={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
          className="checkbox"
        />
        <label htmlFor={todo.id}></label>
        {isEditing ? (
          <textarea
            className="textarea"
            value={newText}
            onChange={handleChange}
            ref={ref}
          />
        ) : (
            <span>{todo.text}</span>
          )}
      </div>
      <div className="item-footer">
        <span>{moment(todo.date).format("YYYY년 MM월 DD일 HH시 mm분")}</span>
        {isEditing && (
          <div className="item-functions">
            <button onClick={handleEdit}>완료</button>
            <button onClick={handleCancel}>취소</button>
          </div>
        )}
        {!isEditing && (
          <div className="item-functions">
            <button onClick={handleToggleEdit}>수정</button>
            {todo.complete && (
              <button onClick={() => deleteTodo(todo)}>삭제</button>
            )}
          </div>
        )}
      </div>
    </li>
  );
};
