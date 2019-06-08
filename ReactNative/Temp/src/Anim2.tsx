import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, Animated, ViewStyle } from "react-native";
import { FadeAnimated } from "beeshell/dist/common/animations";
import { Button } from "beeshell";
import variables from "beeshell/dist/common/styles/variables";

interface IProps {
}

interface IState {
  fadeTag: boolean;
}

export default class Anim2 extends Component<IProps, IState> {
  private fade: FadeAnimated;

  constructor(props: IProps) {
    super(props);
    this.state = { fadeTag: false };
    this.fade = new FadeAnimated();
  }

  fadeOut = () => {
    this.fade.toOut().then(() => {
      this.setState({
        fadeTag: false
      });
    });
  };

  fadeIn = () => {
    this.fade.toIn().then(() => {
      this.setState({
        fadeTag: true
      });
    });
  };

  toggle = () => {
    if (this.state.fadeTag) {
      this.fadeOut();
    } else {
      this.fadeIn();
    }
  };


  render() {
    const MyText = Animated.createAnimatedComponent(Text);

    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.header}>淡入淡出动画 FadeAnimated</Text>
        <View style={[styles.panel]}>
          <Button size='sm' onPress={this.toggle}> Toggle</Button>
          <MyText
            style={[
              { width: 100, height: 100, backgroundColor: "powderblue" },
              {
                transform: [{ scale: this.fade.getState().scale }],
                opacity: this.fade.getState().opacity
              }
            ]}> 这是个TextView
          </MyText>
          <FadeView style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
                    component={Text} fader={this.fade}/>
        </View>
      </ScrollView>
    );
  }
}

interface IFadeViewProps {
  component: any;
  fader: FadeAnimated;
  style?: ViewStyle | ViewStyle[]
}

const FadeView = (props: IFadeViewProps) => {
  const MyView = Animated.createAnimatedComponent(props.component);
  return (
    <View style={props.style}>
      <MyView
        style={[
          {
            transform: [{ scale: props.fader.getState().scale }],
            opacity: props.fader.getState().opacity
          }
        ]}/>
    </View>
  );
};

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