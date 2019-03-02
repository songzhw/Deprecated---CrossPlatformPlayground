import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { MAP01 } from "../../redux/ReduxResearchReducer";

class MapStateToPropsScreen extends Component {
  state = {
    date: 0
  };

  render() {
    console.log(`szw render : ${JSON.stringify(this.state.date)}`);
    return (
      <View style={styles.root}>
        <Text>MapStateToPropsScreen Screen</Text>
        <Button title="send action" onPress={() => this.props.dispatch({ type: MAP01 })}/>
        <Button title="setState" onPress={() => this.setState({ date: new Date() })}/>
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
  console.log(`szw MapStateToPropsScreen mapStateToProps() state = ${JSON.stringify(state)}`);
  return {};
};

export default connect(mapStateToProps)(MapStateToPropsScreen);