import React, { useEffect } from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import {WebView} from "react-native-webview"
import HttpBridge from "react-native-http-bridge";

interface IProps extends ViewProps {
}

export const BridgeDemo = (props: IProps) => {

  // useEffect(() => {
  //   HttpBridge.start(8321, "szw1", request => {
  //     HttpBridge.respond(request.requestId, 200, "application/text", "<html><body><h1>hello world</h1></body></html>");
  //   });
  //
  //   return () => HttpBridge.stop();
  // }, []);


  return (
    <View style={{flex:1}}>
      <WebView
        source={{ uri: "https://www.google.com" }}
        style={{ flex:1 }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});