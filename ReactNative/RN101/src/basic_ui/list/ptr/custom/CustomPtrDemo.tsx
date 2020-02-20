import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { PullToRefreshContainer } from "./PullToRefreshContainer";

interface IProps extends ViewProps {
}

export const CustomPtrDemo = (props: IProps) => {

  function renderHeader() {
    return <Text style={styles.header}>Header Header</Text>;
  }

  return (
    <View>
      <PullToRefreshContainer
        headerComponent={renderHeader}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  header: {
    height: 30,
    backgroundColor: "blue"
  }
});
