import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import Any = jasmine.Any;
import { NetInfoState } from "@react-native-community/netinfo/src/internal/types";

interface IProps {
}

export class NetInfoDemo extends React.Component<IProps> {
  state = {};
  unsubscribe = () => {  };

  componentDidMount() {
    this.unsubscribe = NetInfo.addEventListener(state => {
      console.log(`szw listener: `, state);
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  fetchNetInfo() {
    NetInfo.fetch().then(state => {
      console.log(`szw connection`, state);
    });
  }

  render() {
    return super.render();
  }
}

const styles = StyleSheet.create({});
