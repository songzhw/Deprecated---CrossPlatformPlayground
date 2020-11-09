import React from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native";

interface IProps extends ViewProps {
  size: number;
  source: ImageSourcePropType;
  onPressed: () => void
}

export const ImageButton = (props: IProps) => {
  const { size } = props;

  return (
    <TouchableOpacity style={[props.style, { width: size, height: size}]} onPress={props.onPressed}>
      <Image source={props.source} resizeMode="stretch" style={{width: size, height: size}}/>
    </TouchableOpacity>
  );
};


