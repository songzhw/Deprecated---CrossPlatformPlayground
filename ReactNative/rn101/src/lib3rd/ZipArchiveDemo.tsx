import React from "react";
import { Button, View } from "react-native";
import { zip, unzip, unzipAssets, subscribe } from "react-native-zip-archive";
import { MainBundlePath, DocumentDirectoryPath } from "react-native-fs";

export const ZipArchiveDemo = () => {
  // DocumentDirectoryPath : '/data/user/0/com.rn101/files'

  function unzipIt() {
    const sourcePath = `${DocumentDirectoryPath}/RNFetchBlobTmp_k4cm76lvnxbd5298gs0njc.zip`;
    const targetPath = DocumentDirectoryPath+"/alice";

    unzip(sourcePath, targetPath)
      .then((path) => {
        console.log(`unzip completed at ${path}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <Button title={"unzip"} onPress={unzipIt}/>
    </View>
  );
};
