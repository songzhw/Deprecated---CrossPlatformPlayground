import React, { Component } from "react";
import { AppState, AppStateStatus, Text, ViewProps } from "react-native";
import { connect } from "react-redux";
import { BG_SAGA_INCREASE } from "../../core/redux/BgJobReducer";
import { Dispatch } from "redux";

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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
    console.log(`szw AppState changes: `, nextAppState);

    if (nextAppState === "background") {

      this.props.send(200); // 有saga.delay()之关的话, 这种delay就不会执行. 但只是普通打打日志, redux和saga都调用了

      fetch("http://www.mocky.io/v2/5caa5b8e3000001607904577")
        .then((response) => response.json())
        .then(resp => console.log("szw in bg : resp = ", resp))
        .catch((error) => {
          console.error(`szw in bg, error = `, error);
        });
    }

    /*
    // change listener, state="background"时的setInterval()是不会执行哦!
    if (nextAppState === "background") {
      console.log(`szw background`);
      // @ts-ignore
      this.intervalHandler = setInterval(() => {
        this.num++;
        this.setState({ appState: nextAppState + this.num });
        console.log(`szw background: num++ : `, this.num);
      }, 1000);
    } else if (nextAppState === "active") {
      clearInterval(this.intervalHandler);
      console.log(`szw active clear interval`);
    }
     */
  };

  render() {
    console.log(`Screen render: `, this.state.appState);
    return <Text style={{ fontSize: 25 }}>Current state is: {this.state.appState}</Text>;
  }
}

function mapStateToProps(state: any) {
  return { num: state.bg.saga };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    send: (id: number) => dispatch({ type: BG_SAGA_INCREASE, payload: { id } })
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppStateExample);