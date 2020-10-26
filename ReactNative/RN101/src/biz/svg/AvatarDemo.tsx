import React from "react";
import { View, StyleSheet } from "react-native";
import { ImageAvatar } from "../../ui/svg/ImageAvatar";
import { TextAvatar } from "../../ui/svg/TextAvatar";


export const AvatarDemo = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageAvatar size={100} href={require("../../../res/img/Daimond.jpg")} style={{ margin: 20 }}/>
      <ImageAvatar size={200} href={require("../../../res/img/batman.jpg")} style={{ margin: 20 }}
                   scale="xMidYMin slice"/>
      <TextAvatar size={150} fontSize={50} text="BW" bgColor="gray" textColor="#fff" style={{ margin: 20 }}/>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
