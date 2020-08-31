import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
}

export const LocalServerDemo = (props: IProps) => {

  return (
    <View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});

// import React, { useEffect, useState } from "react";
// import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
// import { WebView } from "react-native-webview";
// import HttpBridge from "react-native-http-bridge";
//
// export const LocalServerDemo = () => {
//   /*
//   [Mon Jul 20 2020 15:55:56.635] szw intercept!!! : url =  /
//   [Mon Jul 20 2020 15:55:56.825] szw intercept!!! : url =  /favicon.ico
//    */
//
//   const [url, setUrl] = useState("https://www.google.com");
//
//   useEffect(() => {
//     console.log(`szw component unmount`);
//     return stop();
//   }, []);
//
//   const start = () => {
//     console.log(`szw start server => `);
//     HttpBridge.start(8321, "szw1", request => {
//       if (request.url === "/favicon.ico") return;
//       console.log(`szw intercept!!! : url = `, request.url, "; id = " + request.requestId);
//       HttpBridge.respond(request.requestId, 200, "text/html",
//         `
// <html>
//      <head>
//       <style type="text/css">@font-face { font-family: 'jb'; src: url('/fonts/abc.ttf');}  </style>
//       <title>my t itle</title>
//       </head>
//     <body>
//       <h1>hello world: ${request.url}</h1><p/>
//       <span  style="font-family:'jb'; font-size:25px">second line</span><p/>
//       <img src="/a.png"/>
//     </body>
// </html>`);
//       // HttpBridge.respond(request.requestId, 200, "application/json", `{"message":"ok","id":200}`);
//     });
//     setUrl("http://localhost:8321");
//   };
//
//   const stop = () => {
//     console.log(`szw stop server`);
//     HttpBridge.stop();
//     google();
//   };
//
//   const google = () => {
//     setUrl("https://www.google.com");
//   };
//
//   const load1 = () => {
//     setUrl("http://localhost:8321/one.html");
//   };
//
//   const load2 = () => {
//     setUrl("http://localhost:8321/two.txt");
//   };
//
//   return (
//     <View style={{ flex: 1 }}>
//       <Button title="start server" onPress={start}/>
//       <View style={{ height: 10 }}/>
//       <Button title="stop server" onPress={stop}/>
//       <View style={{ height: 10 }}/>
//       <Button title="load text1" onPress={load1}/>
//       <View style={{ height: 10 }}/>
//       <Button title="load text2" onPress={load2}/>
//       <WebView
//         source={{ uri: url }}
//         style={{ flex: 1 }}
//       />
//     </View>
//   );
// };
//
//
// const styles = StyleSheet.create({
//   container: {}
// });