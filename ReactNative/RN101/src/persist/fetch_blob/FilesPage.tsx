import React from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import RNFetchBlob from "rn-fetch-blob";

interface IProps extends ViewProps {
}

export const FilesPage = (props: IProps) => {
  console.log(`DocumentDir = `, RNFetchBlob.fs.dirs.DocumentDir); //=>  /data/user/0/com.rn101/files
  console.log(`SDCardDir = `, RNFetchBlob.fs.dirs.SDCardDir); //=>  /storage/emulated/0
  console.log(`DownloadDir = `, RNFetchBlob.fs.dirs.DownloadDir); //=>  /storage/emulated/0/Download
  console.log(`LibraryDir = `, RNFetchBlob.fs.dirs.LibraryDir); //=>  undefined

  const download = () => {
  };

  return (
    <View>
      <Button title="download" onPress={download}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});