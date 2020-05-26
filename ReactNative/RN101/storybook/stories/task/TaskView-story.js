import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { TaskView } from "../../../src/lib/storybook/task/TaskView";


export const TaskViewStory = () => {
  return (
    <View>
      <Text>on</Text>
      <TaskView isChecked={true} task={{ id: 100, name: "hello world", isPinned: false }}/>
      <Text>off</Text>
      <TaskView isChecked={false} task={{ id: 101, name: "second todo", isPinned: true }}/>
    </View>
  );
};


