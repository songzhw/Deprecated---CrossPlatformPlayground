import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, NativeModules } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const NativeDelayWorker = NativeModules.NativeDelayFiveSeconds;

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _NativeBridgeInBgDemo = (props: IProps) => {
  const [text, setText] = useState("(init)");

  function callNative() {
    NativeDelayWorker.start(3000, (msg: string) => {
      console.log(`szw received msg from Native:`, msg);
      const value = new Date().toTimeString();
      setText(value);
    });
  }

  console.log(`szw Screen render()`);
  return (
    <View>
      <Text style={styles.text}> {text} </Text>
      <Button title={"native work"} onPress={callNative}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 30
  }
});

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_NativeBridgeInBgDemo);