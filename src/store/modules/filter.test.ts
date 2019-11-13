import { filterReducer, filterActions } from "./filter";

describe('Filter Actions', () => {
  it('setFilterAction을 실행해야 함', () => {
    const expectedAction = {
      type: 'filter/SET_FILTER',
      payload: {
        filterType: 'active'
      }
    }
    const action = filterActions.setFilter("active");
    expect(action).toEqual(expectedAction);
  });
});

describe('Filter Reducer', () => {

  it('Action Type이 SET_FILTER일 때', () => {
    expect(
      filterReducer(undefined, {
        type: 'filter/SET_FILTER',
        payload: {
          filterType: 'active'
        }
      })
    ).toEqual({
      filterType: 'active'
    })
  })
})