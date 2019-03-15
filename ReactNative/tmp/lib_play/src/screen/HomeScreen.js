import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

class HomeScreen extends Component {
  render() {
    let { navigation } = this.props;
    return (
      <View style={styles.root}>
        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Persist Hello World</Text>
        <Button title="persist name" onPress={()=> navigation.navigate("InputNameScreen")}/>
        <Button title="persist Goods" onPress={()=> navigation.navigate("FetchGoodsScreen")}/>
        <Button title="persist books" onPress={()=> navigation.navigate("FetchBooksScreen")}/>
      </View>
    );
  }

  onGoPersist0 = () => {


  };
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
