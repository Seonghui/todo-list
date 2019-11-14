import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import moment from "moment";
import {
  FaClock,
  FaEdit,
  FaTrashAlt,
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa";

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
      current.style.height = `${current.scrollHeight}px`;
      current.focus();
    }
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setNewText(value);

    // textarea 스크롤 길이 변경
    e.target.style.height = "inherit";

    const computed = window.getComputedStyle(e.target);
    const height =
      parseInt(computed.getPropertyValue("border-top-width"), 10) +
      parseInt(computed.getPropertyValue("padding-top"), 10) +
      e.target.scrollHeight +
      parseInt(computed.getPropertyValue("padding-bottom"), 10) +
      parseInt(computed.getPropertyValue("border-bottom-width"), 10);

    e.target.style.height = `${height}px`;
  };

  const handleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    editTodo(todo, newText);
    setIsEditing(!isEditing);
  };

  const handleToggleEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsEditing(!isEditing);

    const { current } = ref;
    if (current) {
      const len = current.value.length;
      current.style.height = `${current.scrollHeight}px`;
      current.focus();
      // 커서를 맨 끝으로 이동
      current.setSelectionRange(len, len);
    }
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
            spellCheck={false}
          />
        ) : (
          <p>{todo.text}</p>
        )}
      </div>
      <div className="item-footer">
        <p className="item-timestamp">
          <FaClock />
          <span>{moment(todo.date).format("YYYY년 MM월 DD일 HH시 mm분")}</span>
        </p>
        {isEditing && (
          <div className="item-functions">
            <button onClick={handleEdit}>
              <FaCheckCircle />
              <span>완료</span>
            </button>
            <button onClick={handleCancel}>
              <FaTimesCircle />
              <span>취소</span>
            </button>
          </div>
        )}
        {!isEditing && (
          <div className="item-functions">
            <button onClick={handleToggleEdit}>
              <FaEdit />
              <span>수정</span>
            </button>
            {todo.complete && (
              <button onClick={() => deleteTodo(todo)}>
                <FaTrashAlt />
                <span>삭제</span>
              </button>
            )}
          </div>
        )}
      </div>
    </li>
  );
};
