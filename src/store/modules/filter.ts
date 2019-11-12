export interface FilterState {
  filterType: string;
}

export const SET_FILTER = "filter/SET_FILTER";

interface setFilterAction {
  type: typeof SET_FILTER;
  payload: {
    filterType: string;
  };
}

export type FilterActionTypes = setFilterAction;

function setFilter(filterType: string) {
  return {
    type: SET_FILTER,
    payload: {
      filterType
    }
  };
}

export const filterActions = {
  setFilter
};

const initialState: FilterState = {
  filterType: "all"
};

export function filterReducer(
  state = initialState,
  action: FilterActionTypes
): FilterState {
  switch (action.type) {
    case SET_FILTER:
      return {
        filterType: action.payload.filterType
      };
    default:
      return state;
  }
}
