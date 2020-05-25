import { ITask, TaskState, TaskView } from "../ui/TaskView";
import { action } from "@storybook/addon-actions";
import React from "react";
import { storiesOf } from "@storybook/react";

const task = {
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

