import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FamilyConsumer } from "./FamilyContext";

class Child extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 22 }}>{this.props.name}</Text>
    );
  }
}

function connect(InnerComponent) {
  return class Outer extends React.Component {
    render() {
      let getText = (context) => `${context.firstName} * ${context.lastName}`;
      return (
        <FamilyConsumer>
          {context => <InnerComponent name={getText(context)}/>}
        </FamilyConsumer>
      );
    }
  };
}

export default connect(Child)