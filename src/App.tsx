import React, { ReactElement } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoFilter } from "./components/TodoFilter";
import ModalPortal from "./components/ModalPortal";
import AlertPortal from "./components/AlertPortal";

function App(): ReactElement {
  return (
    <div className="container">
      <TodoFilter />
      <AddTodoForm />
      <TodoList />
      <ModalPortal />
      <AlertPortal />
    </div>
  );
}

export default App;
