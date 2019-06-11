import React, { useState } from "react";
import { Button, View, Text, Image, Platform } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";
import { unzip } from "react-native-zip-archive";
import WebView from "react-native-webview";
// @ts-ignore
import StaticServer from "react-native-static-server";

export const StaticServerDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [uri, setUri] = useState("");

  function downloadAndUnzip() {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    RNFetchBlob
      .config({ fileCache: true, appendExt: "zip" })
      .fetch("GET", url)
      .progress((received, total) => {
        const progress = received / total;
      })
      .then(resp => {
        console.log(`szw zip is saved to ${resp.path()}`);
        return resp.path();
      })
      .then(path => {
        const dist = RNFetchBlob.fs.dirs.DocumentDir + "/alice";
        return unzip(path, dist);
      })
      .then(zipPath => {
        // this.startServer(this.port, RNFetchBlob.fs.dirs.DocumentDir + "/");
        const serverRootDir = RNFetchBlob.fs.dirs.DocumentDir + "/alice";
        const server = new StaticServer(8089, serverRootDir, { localOnly: true });
        server.start()
          .then(() => setUri(serverRootDir))
          .catch((error: any) => console.log("szw start server error: ", error));

      })
      .catch(error => console.log(`szw error6 = `, error));
  }


  return (
    <View style={{ flex: 1 }}>
      <Button title={"download"} onPress={downloadAndUnzip}/>
      <WebView source={{ uri }} style={{ width: 300, height: 500, backgroundColor: "powderblue" }}/>
    </View>
  );
};
