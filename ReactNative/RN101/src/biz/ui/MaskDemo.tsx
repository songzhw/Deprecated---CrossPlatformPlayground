import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaskedView from "@react-native-community/masked-view";

export class MaskDemo extends React.Component {

  maskElement = <View style={styles.wrapper}>
    <Text style={styles.text}> Basic Mask </Text>
  </View>;

  render() {
    return (
      <MaskedView maskElement={this.maskElement} style={styles.maskRoot}>
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{ flex: 1, height: "100%", backgroundColor: "#324376" }}/>
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F5DD90" }}/>
        <View style={{ flex: 1, height: "100%", backgroundColor: "#F76C5E" }}/>
        <View style={{ flex: 1, height: "100%", backgroundColor: "#e1e1e1" }}/>
      </MaskedView>
    );
  }
}

const styles = StyleSheet.create({
  maskRoot: { flex: 1, flexDirection: "row", height: "100%",  },
  wrapper: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 60, color: "black", fontWeight: "bold" }
});