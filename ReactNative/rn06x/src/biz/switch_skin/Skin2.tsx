import React, { Dispatch } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect, MapStateToProps } from "react-redux";
import { AnyAction } from "redux";
import { createSetThemeAction } from "../../core/redux/ThemeReducer";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ViewProps

const Skin2_ = (props: IProps) => {

  function onRed() {
    props.setTheme("red");
  }

  function onGreen() {
    props.setTheme("green");
  }

  return (
    <View style={{ backgroundColor: props.bg }}>
      <View style={{ height: 20 }}/>
      <Button title={"=> red"} onPress={onRed}/>
      <View style={{ height: 20 }}/>
      <Button title={"=> green"} onPress={onGreen}/>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  console.log(`szw Skin2_ mapStateToProps() : ${JSON.stringify(state)} `);
  return {
    bg: state.theme.backgroundColor
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    setTheme: (theme: string) => {
      const action = createSetThemeAction(theme);
      dispatch(action);
    }

  };
};

export const Skin2 = connect(mapStateToProps, mapDispatchToProps)(Skin2_);


const styles = StyleSheet.create({
  container: {}
});