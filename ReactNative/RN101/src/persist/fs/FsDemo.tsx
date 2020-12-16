import React, { useEffect } from "react";
import { View, ViewProps, Image, StyleSheet, Button, Animated } from "react-native";
import RnFs from "react-native-fs";

interface IProps extends ViewProps {
}

export const FsDemo = (props: IProps) => {
  // console.log(`DocumentDir1 = `, RnFs.DocumentDirectoryPath); //=>  /data/user/0/com.rn101/files
  // console.log(`SDCardDir1 = `, RnFs.ExternalCachesDirectoryPath); //=>  /storage/emulated/0/Android/data/com.rn101/cache
  // console.log(`DownloadDir1 = `, RnFs.DownloadDirectoryPath); //=>  /storage/emulated/0/Download
  // console.log(`LibraryDir1 = `, RnFs.LibraryDirectoryPath); //=>  undefined
  // console.log(`MainBundle1 = `, RnFs.MainBundlePath); //=>  /data/user/0/com.rn101

  useEffect(() => {
    const res = require("../../../static/one.html");
    const { uri } = Image.resolveAssetSource(res);
    console.log(`szw srcPath = `, uri); //=> http://localhost:8081/assets/static/one.html?platform=ios&hash=96b507ed7cbdef2474ca850fe000d877

    const destPath = RnFs.DocumentDirectoryPath+"/fsdemo/"
    const destFile = destPath+"two.html"
    console.log(`szw destFile = `, destFile)
    RnFs.mkdir(destPath, {NSURLIsExcludedFromBackupKey: true})
    RnFs.downloadFile({fromUrl: uri, toFile: destFile})
  }, []);

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
    // 这种moveFile会失败, 因为uri, path是不同的.
    // const FROM = require("../assets/work.html");
    // const {uri} = Image.resolveAssetSource(FROM);
    // RnFs.moveFile(uri, RnFs.DocumentDirectoryPath+"/jobs")
    //   .then(()=> {console.log(`move done`)})

    // 正确的做法是下载, 把这个uri下载到本地, 就变相达到了moveFile的目的了
    const FROM = require("../assets/work.html");
    const { uri } = Image.resolveAssetSource(FROM);

    const options = {
      fromUrl: uri,
      toFile: RnFs.DocumentDirectoryPath + "/my.html"
    }; // 目录不会帮你创建哦, 要自己先调用RnFs.mkdir()先

    RnFs.downloadFile(options)
      .promise
      .then(resp => console.log(`szw download => `, resp));

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
