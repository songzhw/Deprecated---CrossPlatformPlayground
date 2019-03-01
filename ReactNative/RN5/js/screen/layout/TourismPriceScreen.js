import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

class TourismPriceScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title} numberOfLines={1}>箱根温泉</Text>
        <Text style={styles.flags} numberOfLines={1}>温泉</Text>
        <Text style={styles.price} numberOfLines={1}>￥ 120,000</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 50,
    margin: 20,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#E91e63"
  },
  title: {
    flexShrink: 1,
    backgroundColor: "#ff9800"
  },
  flags: {
    backgroundColor: "#7e57c2"
  },
  price: {
    flexGrow: 1,
    backgroundColor: "#90caf9",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right"
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(TourismPriceScreen);
