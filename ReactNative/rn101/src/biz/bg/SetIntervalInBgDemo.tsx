import React from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

/*
当在后台时, interval不再工作了! 因为发现日志不再显示了, 只有再次回到前台, clock才接着往下走
 */
interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _SetIntervalInBgDemo extends React.Component<IProps> {
  state = {
    time: 60
  };
  intervalHandler = 0;

  componentWillUnmount(): void {
    clearInterval(this.intervalHandler);
  }

  countDown = () => {
    if (this.intervalHandler !== 0) {
      clearInterval(this.intervalHandler);
    } else {
      // @ts-ignore
      this.intervalHandler = setInterval(() => {
        console.log(`szw time =`, this.state.time);
        this.setState({ time: this.state.time - 1 });
      }, 1000);
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.clock}> 15:{this.state.time}</Text>
        <Button title={"interval( clock, 1000ms)"} onPress={this.countDown}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  clock: {
    alignSelf: "center",
    marginTop: 100,
    fontSize: 30
  }
});

function mapStateToProps(state: any) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    // mark: (id: number) => dispatch({ type: "", payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SetIntervalInBgDemo);