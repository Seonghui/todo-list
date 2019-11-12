import React from "react";

interface TodoFilterProps {
  clickFilter: ClickFilter;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ clickFilter }) => {
  return (
    <div>
      <button onClick={() => clickFilter("all")}>all</button>
      <button onClick={() => clickFilter("active")}>active</button>
      <button onClick={() => clickFilter("completed")}>completed</button>
    </div>
  );
};
