import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../store/modules";
import { modalActions } from "../store/modules/modal";
import { useCallback } from "react";

export default function useModal() {
  const dispatch = useDispatch();
  const modal = useSelector((state: StoreState) => state.modal);

  const openModal = useCallback(
    (modal) => {
      dispatch(modalActions.openModal(modal));
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(modalActions.initModal());
  }, [dispatch]);

  return {
    closeModal,
    openModal,
    modal,
  };
}
