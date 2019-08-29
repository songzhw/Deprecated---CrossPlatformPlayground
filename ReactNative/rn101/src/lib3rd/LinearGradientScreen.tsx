import React from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";
import LinearGradientView from "react-native-linear-gradient";

interface IProps extends ViewProps {
}

export const LinearGradientScreen = (props: IProps) => {
  const click = () => {
    console.log(`szw click me : `, new Date());
  };

  // TouchableOpacity.activeOpacity默认0.7.  当值为0.2时, 按下去就是一片白了, 看不见字了. 0.7还能看见字.
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={click} activeOpacity={0.8}>
        <LinearGradientView colors={["#91004B", "#C60C30"]} locations={[0, 0.8859]} style={styles.gradientParent}>
          <Text style={styles.text}> Yes, that's what I need </Text>
        </LinearGradientView>
      </TouchableHighlight>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradientParent: {
    width: 205,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  text: {
    fontSize: 14,
    color: "#fff"
  }
});