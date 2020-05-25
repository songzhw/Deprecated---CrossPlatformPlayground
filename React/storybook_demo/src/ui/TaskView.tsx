import React from "react";
import "./TaskView.css";

export enum TaskState {
  normal,
  pinned,
  done
}

export interface ITask {
  id: number;
  title: string;
  state: TaskState;
}

interface IProps {
  task: ITask;
  onDone: (id: number) => void;
  onPin: (id: number) => void;
}

export const TaskView = (props: IProps) => {
  const { id, title, state } = props.task;

  return (
    <div className={`list-item-${state.toString()}`}>
      <input type="text" value={title} readOnly={true}/>
    </div>
  );
};
