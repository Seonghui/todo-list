import React from "react";

interface TodoFilterProps {
  clickFilter: ClickFilter;
  filter: string;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ clickFilter, filter }) => {
  return (
    <div>
      <button
        className={filter === 'all' ? 'active' : undefined}
        onClick={() => clickFilter("all")}
      >
        all
      </button>
      <button
        className={filter === 'active' ? 'active' : undefined}
        onClick={() => clickFilter("active")}
      >
        active
      </button>
      <button
        className={filter === 'completed' ? 'active' : undefined}
        onClick={() => clickFilter("completed")}
      >
        completed
      </button>
    </div>
  );
};
