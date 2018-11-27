// for those button that need to show "in progress" after getting a click
import React from "react";
import { View, StyleSheet } from "react-native";
import ExButton from './ExButton'

class ActionButton extends React.Component{
  state = {
    working: false
  }

  render() {
    return (
      <View></View>
    )
  }

}

const styles = StyleSheet.create({})

export default ActionButton