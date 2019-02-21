import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>FirstScreen Screen</Text>
        <Button title="-> 2" onPress={() => this.props.navigation.navigate("SecondScreen")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

export default FirstScreen;