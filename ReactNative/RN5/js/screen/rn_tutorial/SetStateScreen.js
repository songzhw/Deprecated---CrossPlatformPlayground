import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class SetStateScreen extends Component {
  state = { id: 0, name: "" };

  render() {
    let text = JSON.stringify(this.state);
    return (
      <View style={styles.root}>
        <Text style={{ fontSize: 22 }}>{text}</Text>
        <Button title={"change id = 23"} onPress={() => this.setState({ id: 23 })}/>
        <Button title={"change name = new"} onPress={() => this.setState({ name: "new" })}/>
        <Button title={"change all"} onPress={() => this.setState({ id: 100, name: "jjj" })}/>
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

export default connect(mapStateToProps)(SetStateScreen);