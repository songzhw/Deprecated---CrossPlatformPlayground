import React from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import RnFs from "react-native-fs";

interface IProps extends ViewProps {
}

export const FilesPage = (props: IProps) => {
  console.log(`DocumentDir = `, RNFetchBlob.fs.dirs.DocumentDir); //=>  /data/user/0/com.rn101/files
  console.log(`SDCardDir = `, RNFetchBlob.fs.dirs.SDCardDir); //=>  /storage/emulated/0
  console.log(`DownloadDir = `, RNFetchBlob.fs.dirs.DownloadDir); //=>  /storage/emulated/0/Download
  console.log(`LibraryDir = `, RNFetchBlob.fs.dirs.LibraryDir); //=>  undefined
  console.log(`MainBundle = `, RNFetchBlob.fs.dirs.MainBundleDir); //=>  undefined

  const downloadHtml = () => {
    const url = "https://songzhw.github.io/repo/index.html";
    RNFetchBlob.fetch("GET", url)
      .then((res) => {
        console.log(`base64 = `, res.base64());
        console.log(`text = `, res.text());
        // console.log(`json = `, res.json()) // html不是json格式, 所以这行会报错的
      });
  };

  const downloadImageAndSave = () => {
    const url = "https://songzhw.github.io/repo/android.png";
    const path = RNFetchBlob.fs.dirs.DocumentDir+"/downloads/my.png"
    RNFetchBlob
      .config({path: path})
      .fetch("GET", url)
      .then((res) => {
        console.log(`path = `, res.path()); //=> /data/user/0/com.rn101/files/downloads/my.png
      });
  };

  return (
    <View>
      <Button title="download html" onPress={downloadHtml}/>
      <Button title="download image" onPress={downloadImageAndSave}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});