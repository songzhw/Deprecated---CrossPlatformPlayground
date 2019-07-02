import React, { Dispatch } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { createSetThemeAction } from "../../core/redux/ThemeReducer";
import { NavigationScreenProps } from "react-navigation";

interface IProps extends ViewProps, NavigationScreenProps {
  setTheme: (theme: string) => void
}

const Skin1_ = (props: IProps) => {

  function onRed() {
    props.setTheme("red");
  }

  function onGreen() {
    props.setTheme("green");
  }

  function go2() {
    props.navigation.navigate("Skin2");
  }

  return (
    <View>
      <View style={{ height: 20 }}/>
      <Button title={"go to Skin2"} onPress={go2}/>
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