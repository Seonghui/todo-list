import React, { ChangeEvent, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";

interface AddtodoFormProps {
  input: string;
  addTodo: AddTodo;
  changeInput: ChangeTodo;
}

export const AddTodoForm: React.FC<AddtodoFormProps> = ({
  addTodo,
  changeInput,
  input
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeInput(e.target.value);
    console.log(e.target.value);
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
      <button className="button" type="submit" onClick={handleSubmit}>
        <FaPlus />
      </button>
    </form>
  );
};
