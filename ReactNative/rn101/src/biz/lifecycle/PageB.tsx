import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { BaseScreenComponent } from "./BaseScreenComponent";


interface IProps extends NavigationScreenProps {
}

class PageB extends BaseScreenComponent<IProps, {}> {
  componentWillMount() {
    console.log(`szw B.onCreate()`);
  }

  componentWillUnmount(): void {
    console.log(`szw B.onDestroy()`);
  }

  onStart() {
    super.onStart();
    console.log(`szw B.onStart()`);
  }

  onResume() {
    super.onResume();
    console.log(`szw B.onResume()`);
  }

  onPause() {
    super.onPause();
    console.log(`szw B.onPause()`);
  }

  onStop() {
    super.onStop();
    console.log(`szw B.onStop()`);
  }

  render() {
    return (
      <View>
        <Text> Page B</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default PageB;