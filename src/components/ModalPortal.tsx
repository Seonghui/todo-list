import React from "react";
import ReactDOM from "react-dom";
import useModal from "../hooks/useModal";
import Dialog from "./Modal";

const ModalPortal = () => {
  const { modal } = useModal();
  if (!modal.isOpen) return null;

  const el = document.getElementById("modal");
  if (!el) {
    return null;
  }
  return ReactDOM.createPortal(<Dialog />, el);
};

export default ModalPortal;
