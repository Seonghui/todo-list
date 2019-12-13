import React, { ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import useAddTodo from "../hooks/useTodos";

export const AddTodoForm: React.FC = () => {
  const { addTodo, changeInput, input } = useAddTodo();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(input);
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
