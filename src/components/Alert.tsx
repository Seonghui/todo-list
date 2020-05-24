import React from "react";
import useAlert from "../hooks/useAlert";

export default function Alert() {
  const { alert, closeAlert } = useAlert();
  const handleCloseModal = () => {
    closeAlert();
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-wrapper">
          <header className="modal-header">
            <p className="modal-title">{alert.title}</p>
          </header>
          <section className="modal-body">
            <p>{alert.message}</p>
          </section>
          <footer className="modal-footer">
            <button onClick={handleCloseModal} className="primary button">
              확인
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
