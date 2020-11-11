import React from "react";
import { View, ViewProps, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native";

interface IProps extends ViewProps {
  size: number;
  source: ImageSourcePropType;
  onPressed: () => void
}

export const _ImageButton = (props: IProps) => {
  const { size } = props;

  console.log(`szw ImageButton: child render`);
  return (
    <TouchableOpacity style={[props.style, { width: size, height: size}]} onPress={props.onPressed}>
      <Image source={props.source} resizeMode="stretch" style={{width: size, height: size}}/>
    </TouchableOpacity>
  );
};

export const ImageButton = React.memo(_ImageButton, (prevProps, nextProps) =>
  nextProps.size === prevProps.size
    && nextProps.onPressed === prevProps.onPressed
    && nextProps.source === prevProps.source
)


