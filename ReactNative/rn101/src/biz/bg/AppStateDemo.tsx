import React, { Component } from "react";
import { AppState, AppStateStatus, Text, ViewProps } from "react-native";
import { connect } from "react-redux";
import { BG_SAGA_INCREASE } from "../../core/redux/BgJobReducer";
import { Dispatch } from "redux";

interface IProps extends ViewProps {
  dispatch: Dispatch
}

class AppStateExample extends Component<IProps> {
  intervalHandler = 0;
  num = 0;
  state = {
    appState: AppState.currentState + this.num
  };


  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    clearInterval(this.intervalHandler);
  }

  _handleAppStateChange = (nextAppState: AppStateStatus) => {
    console.log(`AppState changes: `, nextAppState);

    if (nextAppState === "background") {
      this.props.dispatch({ type: BG_SAGA_INCREASE, payload: { id: 100 } });
    }

    /*
    // change listener, state="background"时的setInterval()是不会执行哦!
    if (nextAppState === "background") {
      console.log(`background`);
      // @ts-ignore
      this.intervalHandler = setInterval(() => {
        this.num++;
        this.setState({ appState: nextAppState + this.num });
        console.log(`background: num++ : `, this.num);
      }, 1000);
    } else if (nextAppState === "active") {
      clearInterval(this.intervalHandler);
      console.log(`active clear interval`);
    }
     */
  };

  render() {
    console.log(`Screen render: `, this.state.appState);
    return <Text style={{ fontSize: 25 }}>Current state is: {this.state.appState}</Text>;
  }
}

export default connect()(AppStateExample);