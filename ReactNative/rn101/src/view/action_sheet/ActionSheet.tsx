import React, { ComponentType, useEffect, useState } from "react";
import {
  View, StyleSheet, Dimensions, TouchableWithoutFeedback, Platform, BackHandler,
  Animated, Keyboard, Text, TouchableOpacity
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
var contentHeight = 260;
const itemHeight = 50;
const animDuration = 450;

interface IProps {
  title: string;
  data: string[];
  actions: { (): void }[];
}

export const ActionSheet = (props: IProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [y, setY] = useState(new Animated.Value(contentHeight));

  useEffect(() => {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", onPressBack);
    }

    //计算高度
    let size = props.data.length;
    contentHeight = (size + 1) * itemHeight + size; //最后是divider的个数
    console.log(`szw contentHeight = ${contentHeight}`);

    return () => {
      if (Platform.OS === "android") {
        BackHandler.removeEventListener("hardwareBackPress", onPressBack);
      }
    };
  }, []);

  const onPressBack = () => {
    if (isShowing) {
      dismiss();
      return true;  // 我消费了这个事件, 系统就不用管了
    } else {
      return false; // 我不处理. 系统来管吧
    }
  };

  function dismiss() {
    Animated.timing(y, { toValue: contentHeight, duration: animDuration }
    ).start(isFinished => {
      if (isFinished) {
        setIsShowing(false);
      }
    });

  }

  const renderContent = () => {
    const { data } = props;
    const thisChildren : JSX.Element[] = [];
    data.forEach((item, index) => {
      const thisKey = `as_option_${index}`;
      const func = props.actions[index];
      thisChildren.push(
        <TouchableOpacity key={thisKey} onPress={() => clickOneOption(func)}>
          <View>
            <View style={styles.divider}/>
            <Text style={styles.textOption}>{item}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return (
      <View style={[styles.content_Options, { height: contentHeight }]}>
        <Text key="as_title"
              style={{
                fontWeight: "normal",
                fontSize: 18,
                textAlign: "center",
                padding: 10,
                height: itemHeight
              }}> {props.title} </Text>
        {thisChildren}
      </View>
    );
  };

  const clickOneOption = (action: () => void) => {
    action();
    dismiss();
  };


  if (!isShowing) {
    return (<View/>);
  }

  return (
    <TouchableWithoutFeedback onPress={() => dismiss()}>
      <View style={styles.root}>
        <Animated.View
          style={[styles.content_Anim, { transform: [{ translateY: y }], height: contentHeight }]}>
          {renderContent()}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  root: {
    // 不加absolute的position, 那结果就不会ActionSheet全屏出现了, 而是依赖flexbox (如垂直的llay)
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    backgroundColor: "#0000007e"
    // opacity: 0.6  //1是全黑了
  },
  content_Anim: {
    width: screenWidth - 20,
    height: contentHeight,
    position: "absolute",
    bottom: 90,
    alignSelf: "center"
  },
  content_Options: {
    height: contentHeight,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white"
  },
  divider: {
    backgroundColor: "black",
    height: 1
  },
  textOption: {
    height: itemHeight,
    color: "#1e1e1e",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5
  }
});
