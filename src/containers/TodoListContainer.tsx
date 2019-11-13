import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "../store/modules";
import { todosActions } from "../store/modules/todos";
import { filterActions } from "../store/modules/filter";
import { TodoList } from "../TodoList";
import { AddTodoForm } from "../AddTodoForm";
import { TodoFilter } from "../TodoFilter";

interface TodoListContainerProps {
  todoItems: Array<Todo>;
  input: string;
  TodosActions: typeof todosActions;
  FilterActions: typeof filterActions;
  filter: string;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({
  todoItems,
  input,
  TodosActions,
  FilterActions,
  filter
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

  const clickFilter: ClickFilter = filter => {
    FilterActions.setFilter(filter);
  };

  return (
    <div className="container">
      <AddTodoForm addTodo={addTodo} input={input} changeInput={changeInput} />
      <TodoFilter clickFilter={clickFilter} filter={filter} />
      <TodoList
        todoItems={todoItems}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
    </div>
  );
};

export default connect(
  ({ todos, filter }: StoreState) => ({
    input: todos.input,
    todoItems: todos.todoItems,
    filter: filter.filterType
  }),
  dispatch => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
    FilterActions: bindActionCreators(filterActions, dispatch)
  })
)(TodoListContainer);
