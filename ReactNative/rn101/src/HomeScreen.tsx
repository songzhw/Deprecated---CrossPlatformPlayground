import React from "react";
import { Button, ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { FlexLayoutDemo1 } from "./rn_tutorial/layout/FlexLayoutDemo1";

export const HomeScreen = (props: NavigationScreenProps) => {

  const { navigation } = props;

  return (
    <ScrollView style={styles.root}>
      {/*<TextInput placeholder="the placeholder of EditText/TextInput"/>*/}

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
