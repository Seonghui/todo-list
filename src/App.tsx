import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "banana", complete: true },
  { text: "apple", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    return setTodos(newTodos);
  };

  const editTodo: EditTodo = (selectedTodo, text) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          text
        };
      }
      return todo;
    });
    return setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodos = todos.filter(todo => {
      return todo !== selectedTodo;
    });
    return setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
