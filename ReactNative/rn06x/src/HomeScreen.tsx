import React from "react";
import { Button, ScrollView, StyleSheet, View, Text, TextInput } from "react-native";
import { NavigationScreenProps, ScreenProps } from "react-navigation";
import { FlexLayoutDemo1 } from "./rn_tutorial/layout/FlexLayoutDemo1";
import { TimerIssue } from "./biz/timer/TimerIssue";
import { ArtDemo } from "./rn_tutorial/art/ArtDemo";
import { DebounceDemo } from "./performance/DebounceDemo";
import { Lottery9Demo } from "./fancy_ui/Lottery9/Lottery9Demo";
import AppStateDemo from "./biz/bg/AppStateDemo";
import SagaInBgDemo from "./biz/bg/SagaInBgDemo";
import NativeBridgeInBgDemo from "./biz/bg/NativeBridgeInBgDemo";
import { ThirdPartyPopOverDemo } from "./fancy_ui/popover/ThirdPartyPopOverDemo";
import { LayoutAnimationDemo } from "./rn_tutorial/anim/LayoutAnimationDemo";
import { DraggableCircleDemo } from "./fancy_ui/drag_n_drop/DraggableCircleDemo";

console.disableYellowBox = true;

export const HomeScreen = (props: NavigationScreenProps & ScreenProps) => {

  const { navigation, screenProps } = props;
  // console.log(`szw HomeScreeen `, screenProps);//=> 'szw HomeScreeen ', { bg: 'green', textColor: 'white' }

  return (
    <ScrollView style={styles.root}>
      {/*<TextInput placeholder="the placeholder of EditText/TextInput"/>*/}


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Fancy UI</Text>
      <HomeButton title="(X) list <-> Detail Anim 2" onPress={() => navigation.navigate("ListDetailAnimDemo2")}/>
      <HomeButton title="(✔) simple hero anim" onPress={() => navigation.navigate("SimpleHeroAnimDemo")}/>
      <HomeButton title="九宫格抽奖" onPress={() => navigation.navigate("Lottery9Demo")}/>
      <HomeButton title="Pop Over" onPress={() => navigation.navigate("MyPopupScreen")}/>
      <HomeButton title="Draggable Circle" onPress={() => navigation.navigate("DraggableCircleDemo")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Fancy Tools</Text>
      <HomeButton title="Dynamic Style Rule" onPress={() => navigation.navigate("DynamicStyleRulesDemo")}/>
      <HomeButton title="Dynamic App Theme" onPress={() => navigation.navigate("DynamicAppThemeDemo")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>3rd Library</Text>
      <HomeButton title="static server" onPress={() => navigation.navigate("StaticServerDemo")}/>
      <HomeButton title="fetch blob" onPress={() => navigation.navigate("FetchBlobDemo")}/>
      <HomeButton title={"unzip zip"} onPress={() => navigation.navigate("ZipArchiveDemo")}/>
      <HomeButton title={"(UI) Linear Gradient"} onPress={() => navigation.navigate("LinearGradientScreen")}/>
      <HomeButton title={"(UI) popover"} onPress={() => navigation.navigate("ThirdPartyPopOverDemo")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>React Native Tutorial</Text>
      <HomeButton title="Debounce + Button" onPress={() => navigation.navigate("DebounceDemo")}/>
      <HomeButton title="dataset properties" onPress={() => navigation.navigate("LambdaInJsx")}/>
      <HomeButton title="lifecycle demo" onPress={() => navigation.navigate("LifecycleScreen")}/>
      <HomeButton title="layout animation" onPress={() => navigation.navigate("LayoutAnimationDemo")}/>
      <HomeButton title="css @media" onPress={() => navigation.navigate("MediaCssDemo")}/>



      <View style={{ height: 8 }}/>
      <Text style={styles.title}>In Background Issue</Text>
      <HomeButton title="setInterval In Bg Demo" onPress={() => navigation.navigate("SetIntervalInBgDemo")}/>
      <HomeButton title="Saga In Bg Demo" onPress={() => navigation.navigate("SagaInBgDemo")}/>
      <HomeButton title="AppState Demo" onPress={() => navigation.navigate("AppStateDemo")}/>
      <HomeButton title="Native Bridge In Bg Demo" onPress={() => navigation.navigate("NativeBridgeInBgDemo")}/>

      <View style={{ height: 8 }}/>
      <Text style={styles.title}>React Native Tutorial</Text>
      <HomeButton title="WebView <--> JS" onPress={() => navigation.navigate("WebViewDemo")}/>
      <HomeButton title="Flex Layout" onPress={() => navigation.navigate("FlexLayoutDemo1")}/>
      <HomeButton title="Modal Example" onPress={() => navigation.navigate("ModalExample")}/>
      <HomeButton title="R-N Art library" onPress={() => navigation.navigate("ArtDemo")}/>
      <HomeButton title="R-N Art 2" onPress={() => navigation.navigate("ArtAnimView")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Business</Text>
      <HomeButton title="startActivityForResult" onPress={() => navigation.navigate("PassA1Screen")}/>
      <HomeButton title="timer in the background" onPress={() => navigation.navigate("TimerIssue")}/>
      <HomeButton title="全局换肤" onPress={() => navigation.navigate("Skin1")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Custom View</Text>
      <HomeButton title="Action Sheet" onPress={() => navigation.navigate("ActionSheetDemo")}/>
      <HomeButton title="Drawer Layout" onPress={() => navigation.navigate("MyDrawerDemo")}/>
      <HomeButton title="Loading List" onPress={() => navigation.navigate("LoadingListScreen")}/>
      <HomeButton title="Component Buttons" onPress={() => navigation.navigate("RadioGroupScreen")}/>
      <HomeButton title="Scrubber" onPress={() => navigation.navigate("ScrubberDemo")}/>


      <View style={{ height: 8 }}/>
      <Text style={styles.title}>Animation</Text>
      <HomeButton title="Animated.createComponent()" onPress={() => navigation.navigate("AnimatedComponentDemo")}/>
      <HomeButton title="(only for iOS) 自动滚动List" onPress={() => navigation.navigate("AnimatedListDemo")}/>
      <HomeButton title="(failed) 自动滚动List2" onPress={() => navigation.navigate("AnimatedListDemo2")}/>
      <HomeButton title="(for android + ios) 自动滚动List3" onPress={() => navigation.navigate("AnimatedListDemo3")}/>
      <HomeButton title="Stagger Anim" onPress={() => navigation.navigate("StaggerAnimationScreen")}/>
      <HomeButton title="Gesture Anim" onPress={() => navigation.navigate("GestureAnimScreen")}/>

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
