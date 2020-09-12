import React from "react";
import { View, Animated, Easing, ViewProps } from "react-native";
import Svg, { Path } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export interface IWaveParams {
  verticalOffset: number;
  waveTop: number;
  fillColor: string;
}

interface IProps extends ViewProps {
  height: number;
  waveParams: IWaveParams[];
  animated: boolean;
}

// 本质上就是三个动画, 然后重合在一起, 就有了最顶上水波荡漾的效果了.
export class WaveView extends React.PureComponent<IProps> {
  _animValues: Animated.Value[];
  _animated: boolean;
  _animations: any[];

  constructor(props: IProps) {
    super(props);

    let { waveParams, animated } = this.props;
    this._animValues = [];
    this._animations = [];
    this._animated = animated || false;

    for (let i = 0; i < waveParams.length; i++) {
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

  render() {
    let { height, waveParams, style } = this.props;
    let waves = [];

    for (let i = 0; i < waveParams.length; i++) {
      let { verticalOffset, waveTop, fillColor } = waveParams[i];
      let translateX = this._animValues[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -2 * waveTop]
      });
      let wave = (
        <AnimatedSvg
          key={i}
          style={{
            width: 3 * waveTop, height: verticalOffset + height,
            position: "absolute", left: 0, bottom: 0,
            transform: [{ translateX }]
          }}
          preserveAspectRatio="xMinYMin meet"
          viewBox={`0 0 ${3 * waveTop} ${verticalOffset + height}`}
        >
          {/*M移动到某点; Q二次贝赛尔曲线(控制点与终点); T简短版的Q(终点); V y 垂直线; H x 水平线; Z 闭合 */}
          <Path
            d={`M 0 0 Q ${waveTop / 4} ${-verticalOffset} ${waveTop / 2} 0 T ${waveTop} 0 T ${3 * waveTop / 2} 0 T ${2 * waveTop} 0 T ${5 * waveTop / 2} 0 T ${3 * waveTop} 0 V ${height} H 0 Z`}
            fill={fillColor}
            transform={`translate(0, ${verticalOffset})`}
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


}
