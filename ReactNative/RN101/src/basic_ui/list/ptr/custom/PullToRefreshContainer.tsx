import React, { ComponentType } from "react";
import {
  Animated,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  StyleSheet,
  View,
  ViewProps
} from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IPros extends ViewProps {
  headerComponent: ComponentType;
  headerHeight: number;
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = { pullDown: new Animated.Value(0) };

  headerStyle = {
    position: "absolute",
    left: 0,
    width: "100%",
    top: -this.props.headerHeight,
    transform: [{ translateY: this.state.pullDown }]
  };
  private panResponder: PanResponderInstance;

  constructor(props: IPros) {
    super(props);
    this.panResponder = PanResponder.create({
      //如果一个父视图要防止子视图在移动开始时成为响应器，它应该有一个 onMoveShouldSetPanResponderCapture 处理程序，返回 true。
      onMoveShouldSetPanResponderCapture: this.onMoveShouldSetPanResponderCapture,
      //用户正移动他们的手指
      onPanResponderMove: this.onPanResponderMove,
      //在触摸最后被引发，即“touchUp”
      onPanResponderRelease: this.onPanResponderRelease,
      //其他的东西想成为响应器。这种视图应该释放应答吗？返回 true 就是允许释放
      onPanResponderTerminationRequest: (event) => false,
      //响应器已经从该视图抽离了。可能在调用onResponderTerminationRequest 之后被其他视图获取，也可能是被操作系统在没有请求的情况下获取了(发生在 iOS 的 control center/notification center)。
      onPanResponderTerminate: this.onPanResponderTerminate
    });
  }

  //如果一个父视图要防止子视图在移动开始时成为响应器，它应该有一个 onMoveShouldSetPanResponderCapture 处理程序，返回 true。
  onMoveShouldSetPanResponderCapture(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
    return true;
  }

  onPanResponderMove(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
    console.log(`szw move`);
  }

  onPanResponderRelease(event: GestureResponderEvent, gestureState: PanResponderGestureState) {

  }

  onPanResponderTerminate(event: GestureResponderEvent, gestureState: PanResponderGestureState) {
    // TODO 其它组件或应用让responder不在了(类似没了focus), 这时让ptr复位
  }

  render() {
    const Header = this.props.headerComponent;
    return (
      <View style={styles.container} {...this.panResponder.panHandlers}>
        <Animated.View style={this.headerStyle}>
          <Header/>
        </Animated.View>
        <Animated.View style={{ flex: 1, transform: [{ translateY: this.state.pullDown }] }}>
          <MyFlatList/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});


/*
1. FlatList 的当前下拉位置，这可以通过 FlatList 的 onScroll 属性来获取当前 FlatList 的滚动距离。
2. 动画中的this.state.pullDown应该是一个Animated.Value(), 这样才好做动画
3.
 */
