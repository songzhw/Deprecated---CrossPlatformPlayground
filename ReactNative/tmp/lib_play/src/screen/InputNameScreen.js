import React, { Component } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";

class InputNameScreen extends Component {
  name = "";

  render() {
    return (
      <View style={styles.root}>
        <TextInput style={{ fontSize: 30 }} onChangeText={this.onTextChanged} placeholder="input a name"/>
        <Button title="Submit" onPress={this.onSubmit}/>
      </View>
    );
  }

  onTextChanged = text => {
    this.name = text;
  };

  onSubmit = () => {
  };

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default InputNameScreen;
// const mapStateToProps = (state) => {
//   return {};
// };
//
// export default connect(mapStateToProps)(InputNameScreen);
