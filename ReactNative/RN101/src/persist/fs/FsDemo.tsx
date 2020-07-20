import React from "react";
import { View, ViewProps, Image, StyleSheet, Button, Animated } from "react-native";
import RnFs from "react-native-fs";

interface IProps extends ViewProps {
}

export const FsDemo = (props: IProps) => {
  console.log(`DocumentDir1 = `, RnFs.DocumentDirectoryPath); //=>  /data/user/0/com.rn101/files
  console.log(`SDCardDir1 = `, RnFs.ExternalCachesDirectoryPath); //=>  /storage/emulated/0/Android/data/com.rn101/cache
  console.log(`DownloadDir1 = `, RnFs.DownloadDirectoryPath); //=>  /storage/emulated/0/Download
  console.log(`LibraryDir1 = `, RnFs.LibraryDirectoryPath); //=>  undefined
  console.log(`MainBundle1 = `, RnFs.MainBundlePath); //=>  /data/user/0/com.rn101



  const downloadHtml = () => {
    const url = "https://songzhw.github.io/repo/index.html";
    // RNFetchBlob.fetch("GET", url)
    //   .then((res) => {
    //     console.log(`base64 = `, res.base64());
    //     console.log(`text = `, res.text());
    //     // console.log(`json = `, res.json()) // html不是json格式, 所以这行会报错的
    //   });
  };

  const moveFile = () => {
    // const FROM = require("./work.txt");
    // const uri = Image.resolveAssetSource(FROM);
    // console.log(`uri = `, uri)
  };

  const readerFolder = () => {
    RnFs.readDir(RnFs.DocumentDirectoryPath)
      .then(result => {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const type = item.isFile ? "file" : "dir";
          console.log(`szw ${type} = `, item.path);
        }
        return RnFs.readFile(result[1].path, "utf8");
      })
      .then(content => console.log(`content = `, content))
      .catch(error => console.log(`szw error = `, error.message));
  };

  return (
    <View>
      <Button title="read folder" onPress={readerFolder}/>
      <View style={styles.pad}/>
      <Button title="download html" onPress={downloadHtml}/>
      <View style={styles.pad}/>
      <Button title="move file" onPress={moveFile}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  pad: { marginTop: 10 }
});