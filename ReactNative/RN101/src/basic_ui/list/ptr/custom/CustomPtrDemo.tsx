import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { PullToRefreshContainer } from "./PullToRefreshContainer";

interface IProps extends ViewProps {
}

export const CustomPtrDemo = (props: IProps) => {
  const HEADER_HEIGHT = 30;

  function renderHeader() {
    return <Text style={{height: HEADER_HEIGHT}}>Header Header</Text>;
  }

  return (
    <View style={styles.container}>
      <PullToRefreshContainer
        headerComponent={renderHeader}
        headerHeight={HEADER_HEIGHT}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});
