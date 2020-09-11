import React from "react";
import { View, StyleSheet, Button, Animated, Easing } from "react-native";
import { WaveView } from "../../ui/svg/WaveView";


export class SvgAnimDemo6_Wave extends React.Component {
  state = {height: 0}

  startAnim = () => {
    const times = [1000, 3000, 5000, 8000, 10000]
    for(let i in times){
      setTimeout(()=>{
        console.log(`szw time to `, times[i]/100)
        this.setState({height: times[i]/100})
      }, times[i])
    }

  };

  resetAnim = () => {

  };

  render() {
    console.log(`szw getHeight: `, this.state.height)
    return (
      <View style={_styles.container}>
        <Button title={"start anim"} onPress={this.startAnim}/>
        <View style={{height: 10}}/>
        <Button title={"reset anim"} onPress={this.resetAnim}/>
        <View style={{height: 10}}/>

        <WaveView
          style={_styles.waveBall}
          H={this.state.height}
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