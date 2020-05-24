import React from "react";
import ReactDOM from "react-dom";
import Alert from "./Alert";
import useAlert from "../hooks/useAlert";

const AlertPortal = () => {
  const { alert } = useAlert();
  if (!alert.isOpen) return null;

  const el = document.getElementById("alert");
  if (!el) {
    return null;
  }

  return ReactDOM.createPortal(<Alert />, el);
};

export default AlertPortal;
