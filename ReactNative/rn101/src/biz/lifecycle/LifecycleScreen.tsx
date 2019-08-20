import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { BaseScreenComponent } from "./BaseScreenComponent";
import { NavigationScreenProps } from "react-navigation";

interface IProps extends NavigationScreenProps {
}

class LifecycleScreen extends BaseScreenComponent<IProps, {}> {

  onStart() {
    super.onStart();
    console.log(`szw LifecycleScreen onStart()`);
  }

  onResume() {
    super.onResume();
    console.log(`szw LifecycleScreen onResume()`);
  }

  onPause() {
    super.onPause();
    console.log(`szw LifecycleScreen onPause()`);
  }

  onStop() {
    super.onStop();
    console.log(`szw LifecycleScreen onStop()`);
  }

  go2B = () => {
    this.props.navigation.navigate("PageB")
  };

  render() {
    return (
      <View>
        <Text>Lifecycle</Text>1
        <Button title={"go to Page B"} onPress={this.go2B}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LifecycleScreen;