const uuidv4 = require('uuid/v4');

export interface TodoState {
  todoItems: Array<Todo>;
  input: string;
}


export const CREATE_TODO = "todo/CREATE_TODO";
export const CHANGE_INPUT = "todo/CHANGE_INPUT";
export const TOGGLE_TODO = "todo/TOGGLE_TODO";
export const REMOVE_TODO = "todo/REMOVE_TODO";
export const EDIT_TODO = "todo/EDIT_TODO";

interface CreateAction {
  type: typeof CREATE_TODO;
  payload: Todo;
}

interface ChangeInputAction {
  type: typeof CHANGE_INPUT;
  payload: {
    input: string;
  };
}

interface ToggleAction {
  type: typeof TOGGLE_TODO;
  payload: {
    todo: object;
  };
}

interface RemoveAction {
  type: typeof REMOVE_TODO;
  payload: {
    todo: object;
  };
}

interface EditAction {
  type: typeof EDIT_TODO;
  payload: {
    todo: object;
    input: string;
  };
}

export type TodoActionTypes =
  | CreateAction
  | ChangeInputAction
  | ToggleAction
  | RemoveAction
  | EditAction;

function create(text: string) {
  return {
    type: CREATE_TODO,
    payload: {
      id: uuidv4(),
      text: text,
      complete: false,
      date: new Date()
    }
  };
}

function changeInput(input: string) {
  return {
    type: CHANGE_INPUT,
    payload: {
      input
    }
  };
}

function toggle(todo: object) {
  return {
    type: TOGGLE_TODO,
    payload: {
      todo
    }
  };
}

function remove(todo: object) {
  return {
    type: REMOVE_TODO,
    payload: {
      todo
    }
  };
}

function edit(todo: object, input: string) {
  return {
    type: EDIT_TODO,
    payload: {
      todo,
      input
    }
  };
}

export const todosActions = {
  create,
  changeInput,
  toggle,
  remove,
  edit
};

const initialState: TodoState = {
  todoItems: [],
  input: ""
};

export function todosReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState {
  switch (action.type) {
    case CREATE_TODO:
      return {
        input: "",
        todoItems: [...state.todoItems, action.payload]
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload.input
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.filter(todo => todo !== action.payload.todo)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map(todo => {
          if (todo === action.payload.todo) {
            todo.complete = !todo.complete;
          }
          return todo;
        })
      };
    case EDIT_TODO:
      return {
        ...state,
        todoItems: state.todoItems.map(todo => {
          if (todo === action.payload.todo) {
            todo.text = action.payload.input;
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
