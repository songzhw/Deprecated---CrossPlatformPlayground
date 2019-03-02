import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { MAP01 } from "../../redux/ReduxResearchReducer";


class SubComponent1 extends Component {

  render() {
    console.log(`szw SubComponent1 render`);
    let text = `MapStateToPropsScreen Screen : id = ${this.props.oid}`
    return (
      <View style={styles.root}>
        <Text>{text}</Text>
        <Button title="send action" onPress={() => this.props.dispatch({ type: MAP01 })}/>
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
  console.log(`szw SubComponent1 mapStateToProps() state = ${JSON.stringify(state)}`);
  return { key: "value" };
};

const ConnectedSubcomponent = connect(mapStateToProps)(SubComponent1);

// = = = = = = = = = = = = = = = = = = = = = = = =

class MapStateToPropsScreen extends React.Component {
  state = {
    id: 0
  };

  render() {
    return (
      <View style={styles.root}>
        <Button title="parent change props" onPress={() => this.setState({ id: new Date() })}/>
        <ConnectedSubcomponent oid={this.state.id}/>
      </View>
    );
  }
}

export default MapStateToPropsScreen;
