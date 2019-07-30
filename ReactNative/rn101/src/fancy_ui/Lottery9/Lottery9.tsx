import React from "react";
import { View, Text, Image, StyleSheet, ViewProps } from "react-native";
import { ILotteryModal } from "./LotteryData";
import { JSXElement } from "@babel/types";

// 690 * 586 =>

interface IProps extends ViewProps {
  data: ILotteryModal[]
}

class Lottery9 extends React.Component<IProps> {
  state = {};

  render() {
    const children: JSX.Element[] = this.props.data.map((item, index) => {
      return <Image source={{ uri: item.url }} style={styles.item} key={`item${index}`}/>;
    });

    return (
      <View style={[this.props.style, styles.container]}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  item: {
    width: 96,
    height: 80,
    marginLeft: 3
  }
});

export default Lottery9;