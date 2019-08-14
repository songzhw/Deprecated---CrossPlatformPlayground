import React from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _SagaInBgDemo extends React.Component<IProps> {
  state = {
    time: "(empty)"
  };

  setTime = () => {
    const time = new Date().toTimeString();
    this.setState({ time });
  };

  render() {
    return (
      <View>
        <Text style={styles.clock}> {this.state.time} </Text>
        <Button title={"set time"} onPress={this.setTime}/>
      </View>
    );
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(_SagaInBgDemo);