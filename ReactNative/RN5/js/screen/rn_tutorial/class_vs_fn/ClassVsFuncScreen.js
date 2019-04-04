import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { connect } from "react-redux";
import { HelloClass } from "./HelloClass";
import { HelloFunc } from "./HelloFunc";
import { HelloClass2 } from "./HelloClass2";

class ClassVsFuncScreen extends Component {
  state = { name: "szw" };

  render() {
    return (
      <View style={styles.root}>

        <Text style={{ fontSize: 25 }}>{this.state.name}</Text>
        <Button title="I'm szw" onPress={() => this.setState({ name: "szw" })}/>
        <Button title="I'm xxx" onPress={() => this.setState({ name: "xxx" })}/>
        <View style={{ height: 30 }}/>

        <HelloClass name={this.state.name}/>
        <HelloFunc name={this.state.name}/>
        <HelloClass2 name={this.state.name}/>

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

// 其children是 组件数组
class ViewPager extends Component {
  state = { total: 0, current: 0 };

  componentDidMount() {
    this.setState({ total: React.Children.count(this.props.children) });
  }

  render() {
    let children = React.Children.toArray(this.props.children);
    let currentItem = children[this.state.current];
    return (
      <div>
        {currentItem}
      </div>
    );
  }
}



