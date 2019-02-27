import React, { Component } from "react";
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.root}>
        <View style={{height: 8}}/>
        <Text style={styles.title}>***</Text>
        <HomeButton title="pulse (class)" onPress={()=>navigation.navigate("Pulse_Class_Screen")}/>
        <HomeButton title="pulse (func)" onPress={()=>navigation.navigate("Pulse_Func_Screen")}/>
      </ScrollView>
    );
  }
}


class HomeButton extends Component {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress} uppercase={false}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  aButton: {
    fontSize: 30,
    color: "red",
    margin: 4
  },
  title: {
    height: 25,
    fontSize: 18,
    textAlign: "center",
    color: "black"
  }
});

export default HomeScreen;