import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { connect } from "react-redux";

class MemoBadScreen extends Component {
  state = {
    values: []
  };

  render() {
    const { values } = this.state;

    return (
      <View>
        <Text> Laggy UI !!!</Text>
        <TextInput onChangeText={this.onTextChanged} value={values[0]} style={styles.textinput}/>
      </View>
    );
  }

  onTextChanged = ({ text }) => {
    let { values } = this.state;
    let another = [...values];
    another.splice(0, 0, text); // 等于ary.insert(0, value)
    this.setState({ values: another });
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  textinput: {
    backgroundColor: 'white'
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(MemoBadScreen);