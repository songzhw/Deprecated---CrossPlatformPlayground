import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { TaskList } from "../../../src/lib/storybook/task/TaskList";

const tasks = [
  { id: 100, name: "create project", isPinned: true },
  { id: 101, name: "new view", isPinned: false },
  { id: 102, name: "draw view on canvas", isPinned: false }
];

export const TaskListStory = () => {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 4000);

  return (
    <View>
      <TaskList isLoading={isLoading} tasks={tasks}/>
    </View>
  );
};

