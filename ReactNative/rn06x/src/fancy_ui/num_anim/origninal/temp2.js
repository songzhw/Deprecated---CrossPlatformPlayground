import React, { Component } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { StringNumberRenderer } from "./render";
import { isString } from "./utils";
import { ChildRenderer } from "./childrenRender";

// 创建"0","1","2","3","4"..."9"的数组,默认绘制数据
const resourceData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export class OrignalComponent extends Component {

  static defaultProps = {
    // 默认滚动时间
    rotateTime: 3000,
    tickerNum: 3,
    height: 20
  };

  state = {
    // 获取props中的字体大小
    fontSize: this.props.textStyle.fontSize
  };

  // props变动时回调
  componentWillReceiveProps(nextProps) {
    this.setState({
      fontSize: this.props.textStyle.fontSize
    });
  }

  render() {

    // 获取文本内容,子组件,样式,滚动时长
    const { height, text, children, textStyle, style, rotateTime, tickerNum } = this.props;

    // 文本内容获取,读取text或子组件内容,两种方式配置文本内容
    const childs = text || children;

    // 如果子组件是字符串,字符串渲染,否则子组件渲染
    const renderer = isString(childs) ? StringNumberRenderer : ChildRenderer;

    //绘制了一个隐藏的text组件，是为了测量在当前样式下，绘制出的数字高度值
    return (
      <View style={[styles.row, { height }, style]}>

        {renderer({
          height,
          tickerNum,
          children: childs,
          textStyle,
          rotateTime,
          rotateItems: resourceData
        })}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  // 数字水平浮动排列
  row: {
    flexDirection: "row",
    overflow: "hidden"
  },

  // 隐藏
  hide: {
    position: "absolute",
    left: 0,
    right: 0,
    opacity: 0
  }
});