import React from "react";
import { View, Text, Image, StyleSheet, ViewProps } from "react-native";
import { ILotteryModal } from "./LotteryData";

// 690 * 586 =>

interface IProps extends ViewProps {
  data: ILotteryModal[]
}

class Lottery9 extends React.Component<IProps> {
  state = {};

  render() {
    const children = this.props.data.map((item, index) => {
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
    width: 90,
    height: 100
  }
});

export default Lottery9;