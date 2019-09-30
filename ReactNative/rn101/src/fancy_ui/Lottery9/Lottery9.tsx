import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { ILotteryModal } from "./LotteryData";
import { LotteryItem } from "./LotteryItem";

// 690 * 586 =>

interface IProps extends ViewProps {
  data: ILotteryModal[]
}

interface IState {
  selectedIndex: number;
  timeIndex: number;
}

class Lottery9 extends React.Component<IProps, IState> {
  state = { selectedIndex: 0, timeIndex: 0 };
  indexRepo = [0, 1, 2, 5, 8, 7, 6, 3];
  timeRepo = [] as number[];
  timeoutHandler: number = 0;

  constructor(props: IProps) {
    super(props);
    this.calculateTime();
  }

  componentWillUnmount(): void {
    clearTimeout(this.timeoutHandler);
  }

  private calculateTime() {
    // given a `duration`, we could calculate the timeRepo out
    this.timeRepo = [
      200, 200, 200, 200, 150, 100, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50,
      150, 100, 200, 250, 300, 400, 500, 550];
  }


  render() {
    const children: JSX.Element[] = this.props.data.map((item, index) => {
      const isSelected = index === 4 ? true :
        index === this.indexRepo[this.state.selectedIndex];
      return <LotteryItem index={index} source={item.url} isSelected={isSelected}/>;
    });

    return (
      <View style={[this.props.style, styles.container]}>
        {children}
      </View>
    );
  }

  start = () => {
    // @ts-ignore
    this.timeoutHandler = setTimeout(() => {
      this.setState((prevState: IState) => {
        const next = (prevState.selectedIndex + 1) % this.indexRepo.length;
        const nextTime = (prevState.timeIndex + 1) % this.timeRepo.length;
        return { selectedIndex: next, timeIndex: nextTime };
      });

      // 只做一次动画. 为0就表示做完了.
      // 没做完, 就接着setTimeout(), 达到一种变速interval()的效果
      if (this.state.timeIndex !== 0) {
        this.start();
      }

    }, this.timeRepo[this.state.timeIndex]);
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
