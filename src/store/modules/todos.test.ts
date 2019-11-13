import { todosReducer, todosActions } from "./todos";

const dummyTodos = {
  id: '',
  text: '테스트 Todo',
  complete: false,
  date: new Date()
}

describe('Todos Actions', () => {

  it('create을 실행해야 함', () => {
    const expectedAction = {
      type: 'todo/CREATE_TODO',
      payload: dummyTodos
    }
    const action = todosActions.create('테스트 Todo');

    expect(action.payload.text).toEqual(expectedAction.payload.text);
    expect(action.payload.complete).toEqual(expectedAction.payload.complete);
  });

  it('changeInput을 실행해야 함', () => {
    const expectedAction = {
      type: 'todo/CHANGE_INPUT',
      payload: {
        input: '테스트 Input'
      }
    }
    const action = todosActions.changeInput('테스트 Input');

    expect(action.payload).toEqual(expectedAction.payload);
  });

  it('toggle을 실행해야 함', () => {
    const expectedAction = {
      type: 'todo/TOGGLE_TODO',
      payload: dummyTodos
    }
    const action = todosActions.toggle(dummyTodos);

    expect(action.payload.todo).toEqual(expectedAction.payload);
  });

  it('remove을 실행해야 함', () => {
    const expectedAction = {
      type: 'todo/REMOVE_TODO',
      payload: dummyTodos
    }
    const action = todosActions.toggle(dummyTodos);

    expect(action.payload.todo).toEqual(expectedAction.payload);
  });

  it('edit을 실행해야 함', () => {
    const expectedAction = {
      type: 'todo/EDIT_TODO',
      payload: {
        todo: dummyTodos,
        input: '테스트 Edit'
      }
    }
    const action = todosActions.toggle({
      todo: dummyTodos,
      input: '테스트 Edit'
    });

    expect(action.payload.todo).toEqual(expectedAction.payload);
  });
});

describe('Todos Reducer', () => {
  it('Action Type이 CREATE_TODO일 때', () => {
    expect(
      todosReducer(undefined, {
        type: 'todo/CREATE_TODO',
        payload: dummyTodos
      })
    ).toEqual({
      input: "",
      todoItems: [dummyTodos]
    })
  })

  it('Action Type이 CHANGE_INPUT일 때', () => {
    expect(
      todosReducer(undefined, {
        type: 'todo/CHANGE_INPUT',
        payload: {
          input: 'test'
        }
      })
    ).toEqual({
      input: 'test',
      todoItems: []
    })
  })

  it('Action Type이 TOGGLE_TODO일 때', () => {
    expect(
      todosReducer(undefined, {
        type: 'todo/TOGGLE_TODO',
        payload: {
          todo: dummyTodos
        }
      })
    ).toEqual({
      input: '',
      todoItems: []
    })
  })

  it('Action Type이 EDIT_TODO일 때', () => {
    expect(
      todosReducer(undefined, {
        type: 'todo/EDIT_TODO',
        payload: {
          input: 'test',
          todo: dummyTodos
        }
      })
    ).toEqual({
      input: '',
      todoItems: []
    })
  })

  it('Action Type이 REMOVE_TODO일 때', () => {
    expect(
      todosReducer(undefined, {
        type: 'todo/REMOVE_TODO',
        payload: {
          todo: dummyTodos
        }
      })
    ).toEqual({
      input: '',
      todoItems: []
    })
  })
})