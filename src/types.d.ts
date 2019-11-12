type Todo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type DeleteTodo = (selectedTodo: Todo) => void;

type EditTodo = (selectedTodo: Todo, text: string) => void;
