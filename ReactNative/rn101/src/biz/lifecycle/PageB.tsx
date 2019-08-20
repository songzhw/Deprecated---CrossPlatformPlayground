import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { BaseScreenComponent } from "./BaseScreenComponent";


interface IProps extends NavigationScreenProps {
}

class PageB extends BaseScreenComponent<IProps, {}> {

  onStart() {
    super.onStart();
    console.log(`szw PageB onStart()`);
  }

  onResume() {
    super.onResume();
    console.log(`szw PageB onResume()`);
  }

  onPause() {
    super.onPause();
    console.log(`szw PageB onPause()`);
  }

  onStop() {
    super.onStop();
    console.log(`szw PageB onStop()`);
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