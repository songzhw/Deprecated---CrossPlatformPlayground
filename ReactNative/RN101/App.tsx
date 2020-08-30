import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { FlatListDemo } from "./src/basic_ui/list/FlatListDemo";
import { PrepackagedDemo02 } from "./src/persist/realm/PrepackagedDemo02";
import { RealmDemo2 } from "./src/persist/realm/RealmDemo2";
import { RealmDemo1 } from "./src/persist/realm/RealmDemo1";
import { FlexLayoutDemo1 } from "./src/basic_ui/layout/FlexLayoutDemo1";
import { FlexBoxDemo2 } from "./src/basic_ui/layout/FlexBoxDemo2";
import { FlexBoxDemo3 } from "./src/basic_ui/layout/FlexBoxDemo3";
import { FlexBoxDemo4 } from "./src/basic_ui/layout/FlexBoxDemo4";
import { FlexBoxDemo5 } from "./src/basic_ui/layout/FlexBoxDemo5";
import { FilesPage } from "./src/persist/fetch_blob/FilesPage";
import { FsDemo } from "./src/persist/fs/FsDemo";
import { BridgeUIPage } from "./src/bridge/ui/BridgeUIPage";
import { LayoutAnimDemo } from "./src/biz/anim/layoutanim/LayoutAnimDemo";
import { SemiCircleDemo } from "./src/biz/ui/SemiCircleDemo";
import { SvgCanvasDemo1 } from "./src/biz/svg/SvgCanvasDemo1";
import { SvgAnimDemo1 } from "./src/biz/svg/SvgAnimDemo1";
import { SvgAnimDemo2_Deprecated } from "./src/biz/svg/SvgAnimDemo2_Deprecated";
import { SvgAnimDemo3 } from "./src/biz/svg/SvgAnimDemo3";

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SvgAnimDemo3/>
  );
};


export default App;

// import Storyb from "./storybook"
// export default Storyb;
