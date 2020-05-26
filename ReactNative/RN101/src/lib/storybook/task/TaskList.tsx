import React from "react";
import { View, ViewProps, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Task, TaskView } from "./TaskView";

interface IProps extends ViewProps {
  isLoading: boolean;
  tasks: Task[];
}

export const TaskList = (props: IProps) => {

  if (props.isLoading) {
    return <ActivityIndicator/>;
  }

  if (props.tasks.length === 0) {
    return <Text>empty list</Text>;
  }

  return (
    <View>
      {
        props.tasks.map(task => (
          <TaskView task={task}/>
        ))
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});
