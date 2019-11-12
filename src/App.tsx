import React from "react";
import { TodoListItem } from "./TodoListItem";

const todos: Array<Todo> = [
  { text: "banana", complete: true },
  { text: "apple", complete: false }
];

const App: React.FC = () => {
  return <TodoListItem todo={todos[0]} />;
};

export default App;
