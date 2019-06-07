import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Animated } from "react-native";
import { FadeAnimated, SlideAnimated } from "beeshell/dist/common/animations";
import { Button } from "beeshell";
import variables from "beeshell/dist/common/styles/variables";

interface IProps {
}

interface IState {
  fadeTag: boolean;
  slideTag: boolean;
}

export default class Anim1 extends Component<IProps, IState> {
  private fade: FadeAnimated;
  private slide: SlideAnimated;

  constructor(props: IProps) {
    super(props);
    this.state = {
      fadeTag: false,
      slideTag: false
    };
    this.fade = new FadeAnimated();
    this.slide = new SlideAnimated({
      directionType: ["horizontal", "vertical"],
      translateXList: [0, 100],
      translateYList: [0, -20]
    });
  }

  render() {
    const MyText = Animated.createAnimatedComponent(Text);

    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.header}>淡入淡出动画 FadeAnimated</Text>
        <View
          style={[
            styles.panel
          ]}>
          <Button
            size='sm'
            onPress={() => {
              if (this.state.fadeTag) {
                this.fade.toOut().then(() => {
                  this.setState({
                    fadeTag: false
                  });
                });
              } else {
                this.fade.toIn().then(() => {
                  this.setState({
                    fadeTag: true
                  });
                });
              }
            }}>
            Toggle
          </Button>

          <MyText
            style={[
              { width: 100, height: 100, backgroundColor: variables.mtdBrandPrimaryDark },
              {
                transform: [
                  { scale: this.fade.getState().scale }
                ],
                opacity: this.fade.getState().opacity
              }
            ]}> 这是个TextView
          </MyText>
        </View>

        <Text style={styles.header}>滑动动画</Text>
        <View style={styles.panel}>
          <Button
            size='sm'
            onPress={() => {
              if (this.state.slideTag) {
                this.slide.toOut().then(() => {
                  this.setState({
                    slideTag: false
                  });
                });
              } else {
                this.slide.toIn().then(() => {
                  this.setState({
                    slideTag: true
                  });
                });
              }
            }}>
            Toggle
          </Button>

          <Animated.View
            style={[
              { width: 100, height: 100, backgroundColor: variables.mtdBrandPrimaryDark },
              {
                transform: [
                  { translateX: this.slide.getState().translateX },
                  { translateY: this.slide.getState().translateY }
                ],
                opacity: this.slide.getState().opacity
              }
            ]}>
          </Animated.View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: variables.mtdFillBody,
    flex: 1
  },
  container: {
    paddingHorizontal: variables.mtdHSpacingXL
  },
  row: {
    marginHorizontal: -variables.mtdHSpacingXL
  },
  header: {
    paddingHorizontal: variables.mtdHSpacingXL,
    paddingVertical: variables.mtdVSpacingL,
    backgroundColor: variables.mtdFillBody,
    fontWeight: "bold",
    color: variables.mtdGrayDark
  },
  panel: {
    paddingHorizontal: variables.mtdHSpacingXL,
    paddingVertical: variables.mtdVSpacingL,
    backgroundColor: "#fff"
  },

  footer: {}
});