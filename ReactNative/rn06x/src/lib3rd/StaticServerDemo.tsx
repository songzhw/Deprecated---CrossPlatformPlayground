import React, { useEffect, useState } from "react";
import { Button, View, Text, Image, Platform } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";
import { unzip } from "react-native-zip-archive";
import WebView from "react-native-webview";
// @ts-ignore
import StaticServer from "react-native-static-server";

export const StaticServerDemo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [uri, setUri] = useState("");
  var server: StaticServer;

  // works on iOS; fails on Android because of the "ERR_ACCESS_DENIED" error
  function readLocal() {
    server = new StaticServer(8090, RNFetchBlob.fs.dirs.DocumentDir, { localOnly: true });
    server.start()
      .then(() => {
        setIsLoaded(true);
        console.log(`szw started a server 2`);
      });
  }

  // fails
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
        server = new StaticServer(8090, serverRootDir, { localOnly: true });
        server.start()
          .then(() => setUri(serverRootDir))
          .catch((error: any) => console.log("szw start server error: ", error));

      })
      .catch(error => console.log(`szw error6 = `, error));
  }

  useEffect(() => {
    return () => {
      if (server) {
        server.kill();
      }
    };
  }, []);


  return (
    <View style={{ flex: 1 }}>
      <Button title={"scan local"} onPress={readLocal}/>
      <Button title={"download"} onPress={downloadAndUnzip}/>
      <WebView source={{ uri: "http://localhost:8090/" }}
               style={{ flex: 1, backgroundColor: "powderblue" }}
               allowFileAccess={true}/>
    </View>
  );
};
