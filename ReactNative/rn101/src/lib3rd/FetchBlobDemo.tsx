import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export const FetchBlobDemo = () => {
  const [json, setJson] = useState("");

  function downloadJson() {
    const url = "https://www.mocky.io/v2/5caa5b8e3000001607904577";
    RNFetchBlob.config({ trusty: true })
      .fetch("GET", url)
      .then(resp => {
        const text = resp.text();
        setJson(text as string);
        console.log("szw json = ", resp.json());
      })
      .catch((error: any) => console.log(`szw error1 = `, error));
  }

  function downloadZip() {
    const url = "https://gerhardsletten.github.io/react-reader/files/alice.epub";
    RNFetchBlob.config({ fileCache: true })
      .fetch("GET", url)
      .progress((received, total) => {
        const progress = received / total;
        setJson("" + progress);
      })
      .then(resp => {
        console.log(`szw zip is saved to ${resp.path()}`);
        setJson(resp.path());
      })
      .catch((error: any) => console.log(`szw error2 = `, error));
  }

  return (
    <View>
      <Text>{json}</Text>
      <Button title={"download json"} onPress={downloadJson}/>
      <Button title={"download zip"} onPress={downloadZip}/>
    </View>
  );
};
