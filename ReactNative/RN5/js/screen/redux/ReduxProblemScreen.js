import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { COMPONENT_1 } from "../../redux/research/Component1Reducer";
import { COMPONENT_2 } from "../../redux/research/Component2Reducer";
import Component1 from "./Component1";
import Component2 from "./Component2";

class ReduxProblemScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>ReduxProblemScreen Screen</Text>
        <Button title="1. count * 2" onPress={() => this.props.dispatch({ type: COMPONENT_1 })}/>
        <View style={{ height: 20 }}/>
        <Button title="2. count + 3" onPress={() => this.props.dispatch({ type: COMPONENT_2 })}/>
        <View style={{ height: 20 }}/>

        <Component1/>
        <Component2/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(ReduxProblemScreen);