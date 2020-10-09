import React from "react";
import { View, StyleSheet } from "react-native";
import { ImageAvatar } from "../../ui/svg/ImageAvatar";
import { TextAvatar } from "../../ui/svg/TextAvatar";


export const AvatarDemo = () => {
  return (
    <View>
      <ImageAvatar size={100} href={require("../../../res/img/Daimond.jpg")} style={{margin:20}}/>
      <TextAvatar size={150} fontSize={50} text="Jor" bgColor="gray" textColor="#fff" style={{margin:20}}/>
    </View>
  );
};



const styles = StyleSheet.create({
  root: {}
});
