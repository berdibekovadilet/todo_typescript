import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline} дней</span>
      </div>
      <button onClick={() => deleteTask(task.taskName)}>X</button>
    </div>
  );
};

export default TodoTask;
