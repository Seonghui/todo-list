import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import moment from "moment";
import useTodos from "../hooks/useTodos";

import {
  FaClock,
  FaEdit,
  FaTrashAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import useModal from "../hooks/useModal";
import DeleteTodoItemDialog from "./modals/DeleteTodoItemModal";
import useAlert from "../hooks/useAlert";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  editTodo: EditTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  const { toggleTodo, editTodo } = useTodos();
  const { openModal } = useModal();
  const { openAlert } = useAlert();
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

  const handleEdit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (newText.trim()) {
      editTodo(todo, newText);
      setIsEditing(!isEditing);
    } else {
      openAlert({
        title: "알림",
        message: "공백은 입력하실 수 없습니다.",
      });
    }
  };

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    openModal({
      title: "알림",
      content: <DeleteTodoItemDialog todo={todo} />,
    });
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

        {/* 수정 모드일 때 textArea 노출 */}
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

        {/* 수정 모드일 때 완료/취소 버튼 노출 */}
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

        {/* 수정 모드가 아닐 때 수정 버튼 노출 */}
        {!isEditing && (
          <div className="item-functions">
            <button onClick={handleToggleEdit}>
              <FaEdit />
              <span>수정</span>
            </button>

            {/* 수정 모드가 아니면서 완료된 Todo일 때 삭제 버튼 노출 */}
            {todo.complete && (
              <button onClick={handleDelete}>
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
