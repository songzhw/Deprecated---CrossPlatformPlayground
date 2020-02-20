import React from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import { PullToRefreshContainer } from "./PullToRefreshContainer";

interface IProps extends ViewProps {
}

export const CustomPtrDemo = (props: IProps) => {

  function renderHeader() {
    return <Text>Header Header</Text>;
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
  container: {}
});
