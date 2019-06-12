import React from "react";
import { Button, ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { NavigationScreenProps, ScreenProps } from "react-navigation";
import { FlexLayoutDemo1 } from "./rn_tutorial/layout/FlexLayoutDemo1";

export const HomeScreen = (props: NavigationScreenProps & ScreenProps) => {

  const { navigation, screenProps } = props;
  console.log(`szw HomeScreeen `, screenProps);//=> 'szw HomeScreeen ', { bg: 'green', textColor: 'white' }


  return (
    <ScrollView style={styles.root}>
      {/*<TextInput placeholder="the placeholder of EditText/TextInput"/>*/}

      <View style={{ height: 8 }}/>
      <Text style={styles.title}>3rd Library</Text>
      <HomeButton title="static server" onPress={() => navigation.navigate("StaticServerDemo")}/>
      <HomeButton title="fetch blob" onPress={() => navigation.navigate("FetchBlobDemo")}/>
      <HomeButton title={"unzip zip"} onPress={()=>navigation.navigate("ZipArchiveDemo")}/>

      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Router/Navigation</Text>
      <HomeButton title="startActivityForResult" onPress={() => navigation.navigate("PassA1Screen")}/>

      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Custom View</Text>
      <HomeButton title="Action Sheet" onPress={() => navigation.navigate("ActionSheetDemo")}/>
      <HomeButton title="Drawer Layout" onPress={() => navigation.navigate("MyDrawerDemo")}/>
      <HomeButton title="Loading List" onPress={() => navigation.navigate("LoadingListScreen")}/>
      <HomeButton title="Component Buttons" onPress={() => navigation.navigate("RadioGroupScreen")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>React Native Tutorial</Text>
      <HomeButton title="WebView <--> JS" onPress={() => navigation.navigate("WebViewDemo")}/>
      <HomeButton title="Flex Layout" onPress={() => navigation.navigate("FlexLayoutDemo1")}/>

      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Animation</Text>
      <HomeButton title="AnimatedComponent" onPress={() => navigation.navigate("AnimatedComponentDemo")}/>
      <HomeButton title="Animated List" onPress={() => navigation.navigate("AnimatedListDemo")}/>



    </ScrollView>
  );
};


HomeScreen.navigationOptions = {
  title: "home",
  headerLeft: <View/>
};


interface IHomeButtonProps {
  title: string;
  onPress: () => void;
}

const HomeButton = (props: IHomeButtonProps) => {
  return (
    <View style={styles.aButton}>
      <Button title={props.title} onPress={props.onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  aButton: {
    fontSize: 30,
    color: "red",
    margin: 4
  },
  title: {
    height: 25,
    fontSize: 18,
    textAlign: "center",
    color: "black"
  }
});
