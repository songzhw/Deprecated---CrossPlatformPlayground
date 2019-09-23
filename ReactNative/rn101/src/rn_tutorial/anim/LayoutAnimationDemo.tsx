import React from "react";
import { View, ViewProps, Text, StyleSheet, NativeModules, LayoutAnimation, TouchableOpacity } from "react-native";

interface IProps extends ViewProps {
}


const { UIManager } = NativeModules;

// 这两行是为了让LayoutAnimation在Android也起作用才加的
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export class LayoutAnimationDemo extends React.Component {
  state = {
    w: 100,
    h: 100
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({ w: this.state.w + 15, h: this.state.h + 15 });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { width: this.state.w, height: this.state.h }]}/>
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    backgroundColor: "red"
  },
  button: {
    backgroundColor: "black"
  },
  buttonText: {
    color: "white"
  }
});
