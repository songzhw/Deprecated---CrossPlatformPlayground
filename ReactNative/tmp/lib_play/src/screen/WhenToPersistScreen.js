import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { doubleNum, plusNum } from "../redux/WhenToPersistReducer";

class WhenToPersistScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22 }}>WhenToPersistScreen Screen {this.props.number}</Text>
        <Button title="save +1" onPress={this.click1}/>
        <Button title="save *2" onPress={this.click2}/>
      </View>
    );
  }

  click1 = () => {
    this.props.dispatch(plusNum(this.props.number));
  };

  click2 = () => {
    this.props.dispatch(doubleNum(this.props.number));
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  let number = state.number.number;
  return { number };
};

export default connect(mapStateToProps)(WhenToPersistScreen);
