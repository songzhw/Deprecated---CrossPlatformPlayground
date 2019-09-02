import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Image, LayoutChangeEvent, LayoutRectangle } from "react-native";
import { MyPopupView } from "./MyPopupView";

export const MyPopupScreen = () => {
  const iv = useRef(null);
  const [rect, setRect] = useState<LayoutRectangle>({ x: 0, y: 0, width: 0, height: 0 });

  const showPopupView = () => {
  };

  const onImageLayout = (ev: LayoutChangeEvent) => {
    const { x, y, width, height } = ev.nativeEvent.layout;
    console.log(`szw Screen onLayout: `, x, y, width, height); //=> 130, 55, 100, 100
    setRect(ev.nativeEvent.layout);
  };

  return (
    <View style={styles.container}>
      <Button title={"click me"} onPress={showPopupView}/>
      <Image
        ref={iv}
        source={require("../../../res/images/category_app.png")}
        style={styles.image}
        onLayout={ev => onImageLayout(ev)}/>

      <MyPopupView isVisible={true} onClose={() => console.log("szw close")} fromRect={rect}>
        <Text style={styles.menuText}> I'm context menu~ </Text>
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
  },
  menuText: {
    fontSize: 25,
    color: "red"
  }
});