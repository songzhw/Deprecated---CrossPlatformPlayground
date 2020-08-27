import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { SemiCircleProgressView } from "../../ui/circle/SemiCircleProgressView";

interface IProps extends ViewProps {
}

const color = "#01579b";
export const SemiCircleDemo = (props: IProps) => {
  const [progress, setProgress] = useState(20);
  const title = progress === 80 ? "reopen" : "resolved";

  const changeProgress = () => {
    setProgress(progress === 80 ? 20 : 80);
  };

  return (
    <View>
      <Button title={title} onPress={changeProgress}/>

      <SemiCircleProgressView
        radius={150} bg="#e0e0e0" style={{ margin: 50 }}
        color={color} progressWidth={50} progress={progress}>
        <Text style={styles.text}>fulfilled: {progress}%</Text>
      </SemiCircleProgressView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 22,
    color: color,
    fontWeight: "bold",
    marginBottom: 10
  }
});