import React from "react";
import useModal from "../hooks/useModal";

export default function Dialog() {
  const { modal } = useModal();
  return (
    <div className="modal-overlay">
      <div className="modal">{modal.content}</div>
    </div>
  );
}
