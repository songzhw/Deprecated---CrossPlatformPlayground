import React, { Dispatch } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { createSetThemeAction } from "../../core/redux/ThemeReducer";

interface IProps extends ViewProps {
  setTheme: (theme: string) => void
}

const Skin1_ = (props: IProps) => {

  function onRed() {
    props.setTheme("red");
  }

  function onGreen() {
    props.setTheme("green");
  }

  return (
    <View>
      <View style={{ height: 20 }}/>
      <Button title={"=> red"} onPress={onRed}/>
      <View style={{ height: 20 }}/>
      <Button title={"=> green"} onPress={onGreen}/>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  console.log(`szw Skin1_ mapStateToProps() : ${JSON.stringify(state)} `);
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    setTheme: (theme: string) => {
      const action = createSetThemeAction(theme);
      dispatch(action);
    }

  };
};

export const Skin1 = connect(mapStateToProps, mapDispatchToProps)(Skin1_);


const styles = StyleSheet.create({
  container: {}
});