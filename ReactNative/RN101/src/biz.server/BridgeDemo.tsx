import React, { useEffect } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview";
import HttpBridge from "react-native-http-bridge";

export class BridgeDemo extends React.Component {
  /*
  [Mon Jul 20 2020 15:55:56.635] szw intercept!!! : url =  /
  [Mon Jul 20 2020 15:55:56.825] szw intercept!!! : url =  /favicon.ico
   */

  state = { url: "https://www.google.com" };

  componentWillUnmount() {
    this.stop();
  }

  start = () => {
    console.log(`szw start server => `);
    HttpBridge.start(8321, "szw1", request => {
      console.log(`szw intercept!!! : url = `, request.url);
      HttpBridge.respond(request.requestId, 200, "text/html", "<html><body><h1>hello world</h1></body></html>");
      // HttpBridge.respond(request.requestId, 200, "application/json", `{"message":"ok","id":200}`);
    });
    this.setState({ url: "http://localhost:8321" });
  };

  stop = () => {
    console.log(`szw stop server`);
    HttpBridge.stop();
    this.google()
  };

  google = () => {
    this.setState({ url: "https://www.google.com" });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{height: 10}}/>
        <Button title="start server" onPress={this.start}/>
        <View style={{height: 10}}/>
        <Button title="stop server" onPress={this.stop}/>
        <WebView
          source={{ uri: this.state.url }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {}
});