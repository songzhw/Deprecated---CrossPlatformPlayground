import React from "react";
import { View, StyleSheet, Button, Animated } from "react-native";
import { WaveView } from "../../ui/svg/WaveView";


export class SvgAnimDemo6_Wave extends React.Component {

  render() {
    return (
      <View style={_styles.container}>

        <WaveView
          style={_styles.waveBall}
          H={12}
          waveParams={[
            { A: 10, T: 180, fill: "#62c2ff" },
            { A: 15, T: 140, fill: "#0087dc" },
            { A: 20, T: 100, fill: "#1aa7ff" }
          ]}
          animated={true}
        />
      </View>
    );
  }
}


const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white"
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: "hidden"
  }
});