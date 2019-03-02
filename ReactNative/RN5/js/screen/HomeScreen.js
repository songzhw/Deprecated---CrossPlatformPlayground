import React, { Component } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.root}>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Custom View</Text>
        <HomeButton title="Action Sheet" onPress={() => navigation.navigate("ActionSheetDemo")}/>
        <HomeButton title="Drawer Layout" onPress={() => navigation.navigate("MyDrawerDemo")}/>
        <HomeButton title="Loading List" onPress={() => navigation.navigate("LoadingListScreen")}/>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Redux Research</Text>
        <HomeButton title="mapStateToProps" onPress={() => navigation.navigate("MapStateToPropsScreen")}/>

        <View style={{ height: 8 }}/>
        <Text style={styles.title}>Layout</Text>
        <HomeButton title="layout - flex?" onPress={() => navigation.navigate("FlexOrNotScreen")}/>
        <HomeButton title="Flex 3 props" onPress={() => navigation.navigate("FlexThreePropsScreen")}/>
        <HomeButton title="Flex Demo: Tourism" onPress={() => navigation.navigate("TourismPriceScreen")}/>

        <View style={{ height: 20 }}/>
        <Text style={styles.title}>RN Tutorial</Text>
        <HomeButton title="find Node Hanlder method" onPress={() => navigation.navigate("FindNodeHandlerScreen")}/>
        <HomeButton title="Context" onPress={() => navigation.navigate("ContextDemo")}/>
        <HomeButton title="PanResponder" onPress={() => navigation.navigate("GestureAnimScreen")}/>
        <HomeButton title="Toolbar - dynamic title" onPress={() => navigation.navigate("DynamicTitleScreen", { name: "home3" })}/>
        <HomeButton title="pitfall - setState()" onPress={() => navigation.navigate("SetStatePitfallScreen")}/>
        <HomeButton title="[error] native view group component" onPress={() => navigation.navigate("BridgeScrollViewScreen")}/>


        <View style={{ height: 20 }}/>
        <Text style={styles.title}>3rd library demos</Text>
        <HomeButton title="Axios" onPress={() => navigation.navigate("AxiosScreen")}/>

        <View style={{ height: 20 }}/>
        <Text style={styles.title}>仿制</Text>
        <HomeButton title="F8 App" onPress={() => navigation.navigate("F8LoginScreen")}/>
        <HomeButton title="Ko First" onPress={() => navigation.navigate("KoFirstScreen")}/>


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