import React from "react";
import { View, Text, Image, StyleSheet, ViewProps } from "react-native";
import { ILotteryModal } from "./LotteryData";
import { JSXElement } from "@babel/types";
import { LotteryItem } from "./LotteryItem";

// 690 * 586 =>

interface IProps extends ViewProps {
  data: ILotteryModal[]
}

interface IState {
  selectedIndex: number
}

class Lottery9 extends React.Component<IProps, IState> {
  state = { selectedIndex: 0 };

  render() {
    const children: JSX.Element[] = this.props.data.map((item, index) => {
      return <LotteryItem index={index} source={item.url} isSelected={index === this.state.selectedIndex}/>;
    });

    return (
      <View style={[this.props.style, styles.container]}>
        {children}
      </View>
    );
  }

  start = () => {
    setInterval(() => {
      this.setState((prevState: IState) => {
        return { selectedIndex: (prevState.selectedIndex + 1) % this.props.data.length };
      });
    }, 500);
  };
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
