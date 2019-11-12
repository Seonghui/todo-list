import React, { ChangeEvent, FormEvent } from "react";

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
    <form>
      <input type="text" value={input} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
