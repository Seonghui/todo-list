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
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(input);
  };

  return (
    <form className="form">
      <input
        className="input-text"
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button className="button" type="submit" onClick={handleSubmit}>
        <FaPlus />
      </button>
    </form>
  );
};
