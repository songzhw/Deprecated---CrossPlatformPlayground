import React, { useEffect } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import {WebView} from "react-native-webview"
import HttpBridge from "react-native-http-bridge";

interface IProps extends ViewProps {
}

export const BridgeDemo = (props: IProps) => {

/*
[Mon Jul 20 2020 15:55:56.635] szw intercept!!! : url =  /
[Mon Jul 20 2020 15:55:56.825] szw intercept!!! : url =  /favicon.ico
 */
  useEffect(() => {
    HttpBridge.start(8321, "szw1", request => {
      console.log(`szw intercept!!! : url = `, request.url);
      // HttpBridge.respond(request.requestId, 200, "application/text", "<html><body><h1>hello world</h1></body></html>");
      HttpBridge.respond(request.requestId, 200, "application/json", `{"message":"ok","id":200}`);
    });

    return () => HttpBridge.stop();
  }, []);


  return (
    <View style={{flex:1}}>
      <WebView
        source={{ uri: "http://localhost:8321" }}
        style={{ flex:1 }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});