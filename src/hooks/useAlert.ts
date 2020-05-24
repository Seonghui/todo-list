import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store/modules";
import { alertActions } from "../store/modules/alert";
import { useCallback } from "react";

export default function useAlert() {
  const dispatch = useDispatch();
  const alert = useSelector((state: StoreState) => state.alert);

  const openAlert = useCallback(
    (alert) => {
      dispatch(alertActions.openAlert(alert));
    },
    [dispatch]
  );

  const closeAlert = useCallback(() => {
    dispatch(alertActions.initAlert());
  }, [dispatch]);

  return {
    openAlert,
    closeAlert,
    alert,
  };
}
