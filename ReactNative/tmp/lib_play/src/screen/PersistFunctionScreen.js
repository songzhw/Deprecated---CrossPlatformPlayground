import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { createObjectWithFunction } from "../redux/PersistFunctionReducer";

class PersistFunctionScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22 }}>PersistFunctionScreen Screen {this.props.number}</Text>
        <Button title="triple" onPress={this.onClick}/>
      </View>
    );
  }

  onClick = () => {
    let number = this.props.number ? this.props.number : 1;
    this.props.dispatch(createObjectWithFunction(number));
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  let mine = state.obj;
  // let tmp = mine.isEven();
  return { number: mine.obj.number };
};

export default connect(mapStateToProps)(PersistFunctionScreen);
