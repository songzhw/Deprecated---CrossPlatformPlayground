import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Image } from "react-native";
import { MyPopupView } from "./MyPopupView";

export const MyPopupScreen = () => {
  const iv = useRef(null);
  const [rect, setRect] = useState(null);

  useEffect(() => {
    // @ts-ignore
    // x = 0, y = 0, width = 100, height = 100, pageX = 130, pageY = 156
    iv.current!.measure((x, y, width, height, pageX, pageY) => {
      console.log("szw measure: ", x, y, width, height, pageX, pageY);
    });

    // @ts-ignore
    iv.current!.onLayout((x, y, width, height) => {
      console.log(`szw onLayout: `, x, y, width, height);
    });
  }, []);

  const showPopupView = () => {
  };

  return (
    <View style={styles.container}>
      <Button title={"click me"} onPress={showPopupView}/>
      <Image ref={iv} source={require("../../../res/images/category_app.png")} style={styles.image}/>

      <MyPopupView isVisible={true} onClose={() => console.log("szw close")} fromReact={rect}>
        <Text> I'm context menu~ </Text>
      </MyPopupView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: "center"
  }
});