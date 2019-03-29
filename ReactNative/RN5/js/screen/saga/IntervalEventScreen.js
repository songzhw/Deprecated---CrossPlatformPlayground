import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";

class IntervalEventScreen extends Component {
  intervalHandler = 0;

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>IntervalEventScreen</Text>
        <View style={{ height: 30 }}/>
        <Button title="start play (every 3s)" onPress={this.onPlay}/>
        <View style={{ height: 20 }}/>
        <Button title="stop" onPress={this.onStop}/>
      </View>
    );
  }

  onPlay = () => {
    this.intervalHandler = setInterval(() => {
      this.props.dispatch({ type: "ACTION_TYPE_PLAY" });
    }, 3000);
  };
  onStop = () => {
    clearInterval(this.intervalHandler);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  text: {
    fontSize: 22,
    color: "black"
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(IntervalEventScreen);