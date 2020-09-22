import React from "react";
import { View, ViewProps, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { GuideMask } from "../../ui/guide/GuideMask";


export const GuideDemo = () => {
  const start = ()=>{

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>新手引导页demo</Text>
      <Image source={require("../../../res/img/Daimond.jpg")} style={styles.logo}/>
      <TouchableOpacity style={styles.btn} onPress={start}>
        <Text style={styles.btnText}>Start Animation</Text>
      </TouchableOpacity>
      <Text style={styles.end}>Your order has arrived!</Text>

      <GuideMask/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  title: {fontSize: 33, marginTop: 30},
  logo: {width: 220, height: 140, marginTop: 120},
  btn: {marginTop: 70},
  btnText: {
    fontSize: 20, textAlign: "center", lineHeight: 50,
    backgroundColor: "blue", color: "white", width: 250, height:50,
  },
  end: {
    position: "absolute", bottom:0, left:0, right:0,
    height: 50, lineHeight: 50, textAlign: "center", fontSize: 22,
    backgroundColor: "green", color: "white"
  }
});

interface IProps extends ViewProps {
}
