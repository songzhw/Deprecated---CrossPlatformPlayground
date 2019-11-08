import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo";

interface IProps {
}

export class NetInfoDemo extends React.Component<IProps> {
  state = { net: {} };
  unsubscribe = () => {
  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      console.log(`szw listener: ${state}`);
      this.setState({ net: state });
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  fetchNetInfo = () => {
    NetInfo.fetch().then(state => {
      console.log(`szw fetch:`, state);
      this.setState({ net: state });
    });
  };

  render() {
    return (
      <View>
        <Button onPress={this.fetchNetInfo} title="listen to netinfo"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
