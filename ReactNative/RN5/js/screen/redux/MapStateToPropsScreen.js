import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class MapStateToPropsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>MapStateToPropsScreen Screen</Text>
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
  console.log(`MapStateToPropsScreen mapStateToProps()`);
  return {};
};

export default connect(mapStateToProps)(MapStateToPropsScreen);