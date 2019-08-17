import React from "react";
import { View, ViewProps, Text, StyleSheet, Button, NativeModules } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const NativeDelayWorker = NativeModules.NativeDelayFiveSeconds;

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _NativeBridgeInBgDemo = (props: IProps) => {
  function callNative() {
    NativeDelayWorker.start(5000, (msg: string) => {
      console.log(`szw received msg from Native:`, msg);
    });
  }

  return (
    <View>
      <Button title={"native work"} onPress={callNative}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
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