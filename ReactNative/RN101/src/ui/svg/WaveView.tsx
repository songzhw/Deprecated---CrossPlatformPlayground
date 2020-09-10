import React from "react";
import { View, Animated, Easing, ViewProps } from "react-native";
import Svg, { Path } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export interface IWaveParams {
  A: number;
  T: number;
  fill: string;
}

interface IProps extends ViewProps {
  H: number;
  waveParams: IWaveParams[];
  animated: boolean;
}

interface IState {
  H: number;
  waveParams: IWaveParams[];
}

export class WaveView extends React.PureComponent<IProps, IState> {
  _animValues: Animated.Value[];
  _animated: boolean;
  _animations: any[];

  constructor(props: IProps) {
    super(props);

    let { H, waveParams, animated } = this.props;

    this.state = { H, waveParams };

    this._animValues = [];
    this._animations = [];
    this._animated = animated || false;

    for (let i = 0; i < this.state.waveParams.length; i++) {
      this._animValues.push(new Animated.Value(0));
    }
  }

  componentDidMount() {
    this._animated && this.startAnim();
  }

  componentWillUnmount() {
    this.stopAnim();
    this._animValues = [];
    this._animations = [];
  }

  render() {
    let { style } = this.props;
    let { H, waveParams } = this.state;

    let waves = [];

    for (let i = 0; i < waveParams.length; i++) {
      let { A, T, fill } = waveParams[i];
      let translateX = this._animValues[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -2 * T]
      });
      let wave = (
        <AnimatedSvg
          key={i}
          style={{
            width: 3 * T,
            height: A + H,
            position: "absolute",
            left: 0,
            bottom: 0,
            transform: [{ translateX }]
          }}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${3 * T} ${A + H}`}
        >
          <Path
            d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${3 * T / 2} 0 T ${2 * T} 0 T ${5 * T / 2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </AnimatedSvg>
      );
      waves.push(wave);
    }

    return (
      <View style={style}>
        {waves}
      </View>
    );
  }

  setWaveParams(waveParams: IWaveParams[]) {
    if (!waveParams) return;

    let animated = this._animated;
    let newWaveCount = waveParams.length;
    let oldWaveCount = this.state.waveParams.length;
    if (animated) {
      this.stopAnim();
      for (let v of this._animValues) {
        v.setValue(0);
      }
    }
    if (newWaveCount !== oldWaveCount) {
      this._animValues = [];
      for (let i = 0; i < waveParams.length; i++) {
        this._animValues.push(new Animated.Value(0));
      }
    }

    this.setState({
      waveParams
    }, () => {
      if (animated) {
        this.startAnim();
      }
    });
  }

  setWaterHeight(H: number) {
    this.setState({ H });
  }

  startAnim() {
    this.stopAnim();

    const speed = 5000;
    const speedIncreasePerWave = 1000;
    const easing = "linear";

    for (let i = 0; i < this._animValues.length; i++) {
      let anim = Animated.loop(Animated.timing(this._animValues[i], {
        toValue: 1,
        duration: speed + i * speedIncreasePerWave,
        easing: Easing[easing],
        useNativeDriver: true
      }));
      this._animations.push(anim);
      anim.start();
    }
    this._animated = true;
  }

  stopAnim() {
    for (let _anim of this._animations) {
      _anim.stop();
    }
    this._animations = [];
    this._animated = false;
  }
}
