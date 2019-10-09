import React, { Dispatch } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { NavigationScreenProps } from "react-navigation";

type IProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ViewProps & NavigationScreenProps

const Skin1_ = (props: IProps) => {

  function go2() {
    props.navigation.navigate("Skin2");
  }

  return (
    <View style={{backgroundColor: props.bg}}>
      <View style={{ height: 20 }}/>
      <Button title={"go to Skin2"} onPress={go2}/>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  console.log(`szw Skin1_ mapStateToProps() : ${JSON.stringify(state)} `);
  return {
    bg: state.theme.backgroundColor
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {};
};

export const Skin1 = connect(mapStateToProps, mapDispatchToProps)(Skin1_);


const styles = StyleSheet.create({
  container: {}
});