import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import { RippleBgView } from "../bridges";

interface IProps extends ViewProps {
}

export const BridgeUIPage = (props: IProps) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*@ts-ignore*/}
      <RippleBgView style={{ flex: 1, backgroundColor: "black" }}
                    stretchMode=""
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {}
});