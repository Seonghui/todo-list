type Todo = {
  id: string;
  text: string;
  complete: boolean;
  date: Date;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type DeleteTodo = (selectedTodo: Todo) => void;

type EditTodo = (selectedTodo: Todo, text: string) => void;

type ChangeTodo = (input: string) => void;

type ClickFilter = (input: string) => void;

type ModalProps = {
  createConfirmProps: object;
}

type ModalState = {
  isOpen: boolean;
  showConfirmProps: any;
}