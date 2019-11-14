import React from "react";

interface TodoFilterProps {
  clickFilter: ClickFilter;
  filter: string;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  clickFilter,
  filter
}) => {
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
