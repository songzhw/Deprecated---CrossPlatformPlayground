import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IInnerProps extends ViewProps {
}
type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const _NativeBridgeInBgDemo = (props: IProps) => {

  return (
    <View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

function mapStateToProps(state: any) {
  return {

  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_NativeBridgeInBgDemo);