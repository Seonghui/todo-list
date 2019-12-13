import React from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoFilter } from "./components/TodoFilter";

const App: React.FC = () => {
  return (
    <div className="container">
      <TodoFilter />
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default App;
