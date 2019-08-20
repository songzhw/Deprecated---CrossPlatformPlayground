import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { BaseScreenComponent } from "./BaseScreenComponent";
import { NavigationScreenProps } from "react-navigation";

interface IProps extends NavigationScreenProps {
}

class LifecycleScreen extends BaseScreenComponent<IProps, {}> {

  componentWillMount() {
    console.log(`szw A.onCreate()`);
  }

  componentWillUnmount(): void {
    console.log(`szw A.onDestroy()`);
  }

  onStart() {
    super.onStart();
    console.log(`szw A.onStart()`);
  }

  onResume() {
    super.onResume();
    console.log(`szw A.onResume()`);
  }

  onPause() {
    super.onPause();
    console.log(`szw A.onPause()`);
  }

  onStop() {
    super.onStop();
    console.log(`szw A.onStop()`);
  }

  go2B = () => {
    this.props.navigation.navigate("PageB");
  };

  render() {
    return (
      <View>
        <Text>Lifecycle</Text>
        <Button title={"go to Page B"} onPress={this.go2B}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default LifecycleScreen;

/*
过程全记录:

1. 先进入本页 (A)
A. onCreate
A. onStart
A. onResume

2. 进入页B
B. onCreate
A. onPause
B. onStart
A. onStop
B. onResume

 */