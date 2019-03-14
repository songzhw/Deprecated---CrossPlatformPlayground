import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { createFetchGoodsAction } from "../redux/GoodsReducer";

class FetchGoodsScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>{this.props.goods}</Text>
        <Button title="Fetch Data" onPress={this.onFetch}/>
      </View>
    );
  }

  onFetch = () => {
    let items = {
      timestampe: "001",
      goods: [
        {
          id: 100,
          name: "book",
          sku: "v1"
        },
        {
          id: 120,
          name: "keyboard",
          sku: "black"
        }
      ]
    };
    this.props.dispatch(createFetchGoodsAction(items));
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  let { goods } = state.GoodsReducers;
  let desp = JSON.stringify(goods);
  return { goods: desp };
};

export default connect(mapStateToProps)(FetchGoodsScreen);
