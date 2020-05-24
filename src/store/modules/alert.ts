import { ReactNode } from "react";

export interface AlertState {
  title: string;
  message: string | ReactNode;
  isOpen: boolean;
}

export const OPEN_ALERT = "alert/OPEN_ALERT";
export const INIT_ALERT = "alert/INIT_ALERT";

interface OpenAlertAction {
  type: typeof OPEN_ALERT;
  payload: AlertState;
}

interface InitAlertAction {
  type: typeof INIT_ALERT;
  payload: AlertState;
}

export type ModalActionTypes = InitAlertAction | OpenAlertAction;

function openAlert({ title, message }: AlertState) {
  return {
    type: OPEN_ALERT,
    payload: {
      title,
      message,
      isOpen: true,
    },
  };
}

function initAlert() {
  return {
    type: INIT_ALERT,
  };
}

export const alertActions = {
  initAlert,
  openAlert,
};

const initialState: AlertState = {
  title: "",
  message: "",
  isOpen: false,
};

export function alertReducer(
  state = initialState,
  action: ModalActionTypes
): AlertState {
  switch (action.type) {
    case OPEN_ALERT:
      return action.payload;
    case INIT_ALERT:
      return initialState;
    default:
      return state;
  }
}
