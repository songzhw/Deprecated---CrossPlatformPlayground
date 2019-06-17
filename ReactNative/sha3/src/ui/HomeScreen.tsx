import React from "react";
import { View, ViewProps, Text, Button, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";

interface IProps extends ViewProps, NavigationScreenProps {
}

export const HomeScreen = (props: IProps) => {

  function onStart() {
    props.navigation.navigate("GameScreen");
  }

  return (
    <View>
      <Button title="Start" onPress={onStart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});