/*
 * story的文件一定得是js, 不能是ts或tsx, 不然storybook解析不了 !!!
 */
import { TaskState, TaskView } from "../ui/TaskView";
import { action } from "@storybook/addon-actions";
import React from "react";

const task = {
  id: 100,
  title: "hello world",
  state: TaskState.normal
};

const actions = {
  onPin: action("pin"),
  onDone: action("done")
};

export default {
  title: "TaskView",
  component: TaskView
};

export const DefaultTask = () => <TaskView task={task} {...actions}/>;
export const PinnedTask = () => <TaskView task={{ ...task, state: TaskState.pinned }} {...actions}/>;
export const ArchievedTask = () => <TaskView task={{ ...task, state: TaskState.done }} {...actions}/>;
