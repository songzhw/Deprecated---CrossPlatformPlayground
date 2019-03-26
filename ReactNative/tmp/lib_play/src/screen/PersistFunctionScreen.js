import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { createObjectWithFunction } from "../redux/PersistFunctionReducer";

class PersistFunctionScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22 }}>PersistFunctionScreen Screen {this.props.number}</Text>
        <Button title="triple"
                onPress={() => this.props.dispatch(createObjectWithFunction(this.props.number))}/>
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
  let mine = state.obj;
  console.log(`szw map mine = ${JSON.stringify(mine)}`);
  return { number: mine.number };
};

export default connect(mapStateToProps)(PersistFunctionScreen);
