import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview";
import HttpBridge from "react-native-http-bridge";

export const BridgeDemo = () => {
  /*
  [Mon Jul 20 2020 15:55:56.635] szw intercept!!! : url =  /
  [Mon Jul 20 2020 15:55:56.825] szw intercept!!! : url =  /favicon.ico
   */

  const [url, setUrl] = useState("https://www.google.com");

  useEffect(()=>{
    console.log(`szw component unmount`)
    return stop()
  }, [])

  const start = () => {
    console.log(`szw start server => `);
    HttpBridge.start(8321, "szw1", request => {
      console.log(`szw intercept!!! : url = `, request.url, "; id = "+request.requestId);
      HttpBridge.respond(request.requestId, 200, "text/html", "<html><body><h1>hello world</h1></body></html>");
      // HttpBridge.respond(request.requestId, 200, "application/json", `{"message":"ok","id":200}`);
    });
    setUrl("http://localhost:8321");
  };

  const stop = () => {
    console.log(`szw stop server`);
    HttpBridge.stop();
    google();
  };

  const google = () => {
    setUrl("https://www.google.com");
  };

  const mine = ()=>{
    setUrl("http://localhost:8321");
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 10 }}/>
      <Button title="start server" onPress={start}/>
      <View style={{ height: 10 }}/>
      <Button title="stop server" onPress={stop}/>
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});