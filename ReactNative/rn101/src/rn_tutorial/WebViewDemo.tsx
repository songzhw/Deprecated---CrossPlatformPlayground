import React from "react";
import { Alert, View } from "react-native";
import WebView from "react-native-webview";

interface IProps {
}

export const WebViewDemo = (props: IProps) => {
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

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ html }}
        onMessage={event => Alert.alert("2秒到了: " + event.nativeEvent.data)}
      />
    </View>
  );
};
/*
source={{html}} : html string
source={{uri}}  : url string
 */
