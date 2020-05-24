import { ReactNode } from "react";

export interface ModalState {
  content: string | ReactNode;
  isOpen: boolean;
}

export const OPEN_MODAL = "modal/OPEN_MODAL";
export const INIT_MODAL = "modal/INIT_MODAL";

interface OpenModalAction {
  type: typeof OPEN_MODAL;
  payload: ModalState;
}

interface InitModalAction {
  type: typeof INIT_MODAL;
  payload: ModalState;
}

export type ModalActionTypes = OpenModalAction | InitModalAction;

function openModal({ content }: ModalState) {
  return {
    type: OPEN_MODAL,
    payload: {
      content,
      isOpen: true,
    },
  };
}

function initModal() {
  return {
    type: INIT_MODAL,
  };
}

export const modalActions = {
  openModal,
  initModal,
};

const initialState: ModalState = {
  content: "",
  isOpen: false,
};

export function modalReducer(
  state = initialState,
  action: ModalActionTypes
): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case INIT_MODAL:
      return initialState;
    default:
      return state;
  }
}
