import React, { useState } from "react";
import { Button, View, Text, Image, Platform } from "react-native";
import RNFetchBlob from "react-native-fetch-blob";

export const FetchBlobDemo = () => {
  const [json, setJson] = useState("");
  const [uri, setUri] = useState("");

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

  function downloadImage() {
    const url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    RNFetchBlob
      .config({
        trusty: true,
        fileCache: true,
        appendExt: "png"
      })
      .fetch("GET", url)
      .then(resp => {
        const path = resp.path();
        console.log(`szw saved image = ${path}`);
        const url = Platform.OS === "android" ? "file://" + path : "" + path;
        setUri(url);
      })
      .catch((error: any) => console.log(`szw error3 = `, error));
  }

  const preparePath = async (targetPath: any) => {
    const exists = await RNFetchBlob.fs.exists(targetPath);
    if (!exists) {
      await RNFetchBlob.fs.mkdir(targetPath);
    }
  };

  function createTxtFile() {
    const targetPath = RNFetchBlob.fs.dirs.DocumentDir+"/work.txt";
    RNFetchBlob.fs
      .exists(targetPath)
      .then( async isExist => {
        if (isExist) {
          console.log(`szw file exist`)
        } else {
          await RNFetchBlob.fs.createFile(targetPath, "test from file", "utf8")
        }
      })
  }

  function readTxtFile(){
    const targetPath = RNFetchBlob.fs.dirs.DocumentDir+"/work.txt";
    RNFetchBlob.fs
      .readFile(targetPath, "utf8", 1024)
      .then(data => {
        setJson(data)
      })
  }


  return (
    <View>
      <Text>{json}</Text>
      <Image source={{ uri: uri }}/>
      <Button title={"download json"} onPress={downloadJson}/>
      <Button title={"download zip"} onPress={downloadZip}/>
      <Button title={"download Image"} onPress={downloadImage}/>
      <Button title={"create a file locally"} onPress={createTxtFile}/>
      <Button title={"read from a local file"} onPress={readTxtFile}/>
    </View>
  );
};
