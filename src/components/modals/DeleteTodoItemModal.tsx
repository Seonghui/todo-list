import React from "react";
import useModal from "../../hooks/useModal";
import useTodos from "../../hooks/useTodos";

interface DeleteTodoItemDialogProps {
  todo: Todo;
}

export default function DeleteTodoItemDialog({
  todo,
}: DeleteTodoItemDialogProps) {
  const { closeModal } = useModal();
  const { deleteTodo } = useTodos();

  const handleDeleteTodo = () => {
    deleteTodo(todo);
    closeModal();
  };
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <div className="modal-wrapper">
      <section className="modal-body">정말 삭제하시겠습니까?</section>
      <footer className="modal-footer">
        <button onClick={handleDeleteTodo} className="primary button">
          확인
        </button>
        <button onClick={handleCloseModal} className="secondary button">
          취소
        </button>
      </footer>
    </div>
  );
}
