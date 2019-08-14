import React from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { BG_SAGA_INCREASE } from "../../core/redux/BgJobReducer";

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class _SagaInBgDemo extends React.Component<IProps> {

  setTime = () => {
    const num = this.props.num + 1;
    this.props.increase(num);
  };

  render() {
    return (
      <View>
        <Text style={styles.clock}> {this.props.num} </Text>
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
  return { num: state.bg.saga };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increase: (id: number) => dispatch({ type: BG_SAGA_INCREASE, payload: { id } })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_SagaInBgDemo);