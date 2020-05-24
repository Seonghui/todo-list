import { StoreState } from "../store/modules";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { filterActions } from "../store/modules/filter";

export default function useFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state: StoreState) => state.filter.filterType);

  const clickFilter = useCallback(
    (filter) => dispatch(filterActions.setFilter(filter)),
    [dispatch]
  );

  return { filter, clickFilter };
}
