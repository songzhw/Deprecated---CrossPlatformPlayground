import React, { Component } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { PlayerView } from "./src/components/PlayerView";
import { MyDeck } from "./src/components/MyDeck";

interface Props {
}

export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView>
        <View>
          <Text>FlexBox布局</Text>
          <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={[styles.box2]}/>
            <View style={[styles.box3]}/>
          </View>
          <Text>第二个元素position=relative,top:20，left20</Text>
          <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={[styles.box2, { position: "relative", top: 20, left: 20 }]}></View>
            <View style={styles.box3}/>
          </View>
          <Text>第二个元素position=absolute,top:20，left20</Text>
          <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={[styles.box2, { position: "absolute", top: 20, left: 20 }]}></View>
            <View style={styles.box3}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    marginBottom: 10
  },
  box1: {
    width: 50,
    height: 50,
    backgroundColor: "#FF0000"
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: "#00FF00"
  },
  box3: {
    width: 50,
    height: 50,
    backgroundColor: "#0000FF"
  }
});

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlayerView/>
//         <PlayerView style={styles.topCenter}/>
//         <PlayerView/>
//         <PlayerView/>
//         <MyDeck/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: "#F5FCFF"
//   },
//   topCenter: {
//     position: "absolute",
//     top:100,
//     left: 100,
//     bottom: 200,
//     right: 200
//   }
// });