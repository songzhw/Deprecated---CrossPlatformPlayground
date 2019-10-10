import React from "react";
import { Alert, View } from "react-native";
import WebView from "react-native-webview";


export const WebViewDemo = () => {
  const html = `
      <html lang="en">
        <body>
          <script>
            setTimeout(() => window.ReactNativeWebView.postMessage("Hello!"), 2000)
          </script>
          <p>WebView Demo</p>
        </body>
      </html>
    `;

  const runFirst = `
      document.body.style.backgroundColor = 'red';  //指的是source这个url中的body
      setTimeout(function() { window.alert('hi, from the second webview') }, 6000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{flex: 1, backgroundColor: 'pink' }}
        source={{ html }}
        onMessage={event => Alert.alert("2秒到了: " + event.nativeEvent.data)}
      />

      <WebView
        style={{ flex: 3 }}
        source={{ uri: "https://github.com/react-native-community/react-native-webview" }}
        injectedJavaScript={runFirst}
      />
    </View>
  );
};
/*
source={{html}} : html string
source={{uri}}  : url string
 */
