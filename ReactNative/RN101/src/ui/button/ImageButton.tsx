import React from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native";

interface IProps extends ViewProps {
  size: number;
  source: ImageSourcePropType;
  onPressed: () => void
}

export const ImageButton = (props: IProps) => {

  return (
    <TouchableOpacity style={props.style} onPress={props.onPressed}>
      <Image source={props.source} width={props.size}/>
    </TouchableOpacity>
  );
};


