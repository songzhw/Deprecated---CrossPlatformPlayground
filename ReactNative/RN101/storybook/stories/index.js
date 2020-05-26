import React from "react";
import { Text, View } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "./Button";
import CenterView from "./CenterView";
import Welcome from "./Welcome";
import { TaskView } from "../../src/lib/storybook/task/TaskView";

console.disableYellowBox = true;

storiesOf("Task", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("preview", () => (
    <View>
      <Text>on</Text>
      <TaskView isChecked={true} task={{id:100, name: "hello world", isPinned: false}}/>
      <Text>off</Text>
      <TaskView isChecked={false} task={{id:101, name: "second todo", isPinned: true}}/>
    </View>
  ));


storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("Button")}/>);

storiesOf("Button", module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onPress={action("clicked-emoji")}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));


