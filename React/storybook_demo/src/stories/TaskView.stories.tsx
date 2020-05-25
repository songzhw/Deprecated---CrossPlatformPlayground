import { ITask, TaskState, TaskView } from "../ui/TaskView";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

const task: ITask = {
  id: 100,
  title: "hello world",
  state: TaskState.normal
};

const actions = {
  onPin: action("pin"),
  onDone: action("done")
};

storiesOf("TaskView", module)
  .add("default", () => <TaskView task={task} {...actions}/>)
  .add("pinned", () => <TaskView task={{ ...task, state: TaskState.pinned }} {...actions}/>)
  .add("default", () => <TaskView task={{ ...task, state: TaskState.done }} {...actions}/>);
