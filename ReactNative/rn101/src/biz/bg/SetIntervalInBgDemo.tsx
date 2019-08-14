import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface IInnerProps extends ViewProps {
}

type IProps = IInnerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

let intervalHandler = 0;

const _SetIntervalInBgDemo = (props: IProps) => {
  const [time, setTime] = useState(60);

  function countDown() {
    if (intervalHandler !== 0) {
      clearInterval(intervalHandler);
    } else {
      setInterval(() => setTime(time - 1), 1000);
    }
  }

  return (
    <View>
      <Text style={styles.clock}> 15:{time}</Text>
      <Button title={"interval( clock, 1000ms)"} onPress={countDown}/>
    </View>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(_SetIntervalInBgDemo);