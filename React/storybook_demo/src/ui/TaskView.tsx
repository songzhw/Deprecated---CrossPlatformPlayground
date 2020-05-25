import React from "react";
import "./TaskView.css";
import fullStar from "../../res/img/ic_star_full.svg";
import emptyStar from "../../res/img/ic_star_empty.svg";
import logo from "../logo.svg";

export enum TaskState {
  normal = "normal",
  pinned = "pinned",
  done = "done"
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

  const starIcon = state === TaskState.done ? null
    : state === TaskState.pinned ? <img src={fullStar} className="star-icon"/>
      : <img src={emptyStar} className="star-icon"/>;

  return (
    <div className={`list-item ${state.toString()}`}>
      <label className="checkbox">
        <input type="checkbox" defaultChecked={state === TaskState.done} disabled={true} name="checked"/>
        <span className="checkbox-custom" onClick={() => props.onDone(id)}/>
      </label>

      <div className={"title"}>
        <input type={"text"} value={title} readOnly={true} placeholder={"input title"}/>
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        <a onClick={() => props.onPin(id)}>
          {starIcon}
        </a>
      </div>

    </div>
  );
};
