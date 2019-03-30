import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { connect } from "react-redux";
import { HelloClass } from "./HelloClass";
import { HelloFunc } from "./HelloFunc";

class ClassVsFuncScreen extends Component {
  state = { name: "szw" };

  render() {
    return (
      <View style={styles.root}>

        <Text style={{fontSize: 25}}>{this.state.name}</Text>
        <Button title="I'm szw" onPress={()=>this.setState({name: 'szw'})}/>
        <Button title="I'm xxx" onPress={()=>this.setState({name: 'xxx'})}/>
        <View style={{height: 30}}/>

        <HelloClass name={this.state.name}/>
        <HelloFunc name={this.state.name}/>

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

export default connect(mapStateToProps)(ClassVsFuncScreen);