import React from "react";
import { View, ViewProps, Text, StyleSheet, Platform } from "react-native";
import Svg, { ClipPath, Defs, G, Image, Path } from "react-native-svg";


export const SvgCanvas18_ClipPath_Image = () => {

  const imageUrl = "https://raisinghappykittens.com/dev/wp-content/uploads//2019/10/kittens-555822-1024x569.jpg";

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%"
           viewBox="0 0 828 828" pointerEvents="none">
        <Defs>
          <ClipPath id="clipPath">
            <Path d="M762.2,189.9c-17.4-27.1-38.1-52.2-61.3-74.5c-23.9-22.9-50.8-43.1-79.8-59.8C528.3,2,419.9-13.5,315.9,11.9
c-50.6,12.4-97.8,33.8-140.2,63.6C131.9,106.3,95,144.9,65.9,190.1c-0.1,0.2-0.2,0.3-0.3,0.5c-3.4,5.8-1.4,13,4.4,16.4l308.3,178
c8.4-10.4,21.3-17.1,35.8-17.1c14.4,0,27.2,6.6,35.6,16.9l308.4-178c1.9-1.1,3.4-2.6,4.5-4.4C764.8,198.5,764.7,193.7,762.2,189.9z"/>
          </ClipPath>
        </Defs>

        <Image clipPath="url(#clipPath)"
               x="0" y="0" width="100%"
               preserveAspectRatio="xMidYMid slice"
               href={{ uri: imageUrl }}/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 }
});
