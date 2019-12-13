import React from "react";
import useFilter from "../hooks/useFilter";

export const TodoFilter: React.FC = () => {
  const { filter, clickFilter } = useFilter();
  return (
    <div className="todo-filter">
      <button
        className={filter === "all" ? "active" : undefined}
        onClick={() => clickFilter("all")}
      >
        전체
      </button>
      <button
        className={filter === "active" ? "active" : undefined}
        onClick={() => clickFilter("active")}
      >
        미완료
      </button>
      <button
        className={filter === "completed" ? "active" : undefined}
        onClick={() => clickFilter("completed")}
      >
        완료
      </button>
    </div>
  );
};
