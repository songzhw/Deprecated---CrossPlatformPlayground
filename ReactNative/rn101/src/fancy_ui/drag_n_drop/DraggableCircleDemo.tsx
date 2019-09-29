import React from "react";
import { View, StyleSheet, Text, Animated, PanResponder, PanResponderInstance } from "react-native";

interface IProps {
}

interface IState {
  position: Animated.ValueXY;
  panResponder: PanResponderInstance
}

export class DraggableCircleDemo extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        Animated.spring(this.state.position,
          { toValue: { x: 30, y: 30 }, friction: 5 }
        ).start();
      }
    });

    this.state = { position, panResponder };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={[styles.ball, this.state.position.getLayout()]}
          {...this.state.panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
