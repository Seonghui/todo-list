import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "../store/modules";
import { todosActions } from "../store/modules/todos";
import { TodoList } from "../TodoList";
import { AddTodoForm } from "../AddTodoForm";

interface TodoListContainerProps {
  todoItems: Array<Todo>;
  input: string;
  TodosActions: typeof todosActions;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({
  todoItems,
  input,
  TodosActions
}) => {
  const toggleTodo: ToggleTodo = selectedTodo => {
    TodosActions.toggle(selectedTodo);
  };

  const editTodo: EditTodo = (selectedTodo, input) => {
    TodosActions.edit(selectedTodo, input);
  };

  const deleteTodo: DeleteTodo = selectedTodo => {
    TodosActions.remove(selectedTodo);
  };

  const addTodo: AddTodo = input => {
    TodosActions.create(input);
  };

  const changeInput: ChangeTodo = input => {
    TodosActions.changeInput(input);
  };

  return (
    <div className="App">
      <AddTodoForm addTodo={addTodo} input={input} changeInput={changeInput} />
      <TodoList
        todoItems={todoItems}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default connect(
  ({ todos }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch)
  })
)(TodoListContainer);
