import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreState } from "../store/modules";
import { todosActions } from "../store/modules/todos";
import { filterActions } from "../store/modules/filter";
import { TodoList } from "../components/TodoList";
import { AddTodoForm } from "../components/AddTodoForm";
import { TodoFilter } from "../components/TodoFilter";
import modalService from "../components/modalService";

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

  const editTodo: EditTodo = async (selectedTodo, input) => {
    if (input.trim()) {
      TodosActions.edit(selectedTodo, input);
    } else {
      await (modalService as any).show({
        title: "알림",
        message: "공백은 입력하실 수 없습니다.",
        isAlert: true
      });
    }
  };

  const deleteTodo: DeleteTodo = async selectedTodo => {
    const result = await (modalService as any).show({
      message: "정말 삭제하시겠습니까?",
      isAlert: false
    });
    if (result) {
      TodosActions.remove(selectedTodo);
    }
  };

  const addTodo: AddTodo = async input => {
    if (input.trim()) {
      TodosActions.create(input);
    } else {
      await (modalService as any).show({
        title: "알림",
        message: "공백은 입력하실 수 없습니다.",
        isAlert: true
      });
    }
  };

  const changeInput: ChangeTodo = input => {
    TodosActions.changeInput(input);
  };
  const clickFilter: ClickFilter = filter => {
    FilterActions.setFilter(filter);
  };
  return (
    <div className="container">
      <TodoFilter />
      <AddTodoForm />
      <TodoList />
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
