import React, { ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import useAddTodo from "../hooks/useTodos";
import modalService from "../components/modalService";

export const AddTodoForm: React.FC = () => {
  const { addTodo, changeInput, input } = useAddTodo();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeInput(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
    } else {
      await (modalService as any).show({
        title: "알림",
        message: "공백은 입력하실 수 없습니다.",
        isAlert: true
      });
    }
  };

  return (
    <form className="form add-todo-form">
      <textarea
        className="textarea"
        value={input}
        onChange={handleChange}
        placeholder="할 일을 입력해 주세요."
      />
      <button
        className={`button ${!input.trim().length ? " disabled" : ""}`}
        type="submit"
        onClick={handleSubmit}
      >
        <FaPlus />
      </button>
    </form>
  );
};
