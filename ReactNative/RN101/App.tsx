import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {FlatListDemo} from "./src/basic_ui/list/FlatListDemo";
import {PrepackagedDemo02} from "./src/persist/realm/PrepackagedDemo02";
import {RealmDemo2} from "./src/persist/realm/RealmDemo2";
import {RealmDemo1} from "./src/persist/realm/RealmDemo1";
import {FlexLayoutDemo1} from "./src/basic_ui/layout/FlexLayoutDemo1";
import {FlexBoxDemo2} from "./src/basic_ui/layout/FlexBoxDemo2";
import {FlexBoxDemo3} from "./src/basic_ui/layout/FlexBoxDemo3";
import {FlexBoxDemo4} from "./src/basic_ui/layout/FlexBoxDemo4";
import {FlexBoxDemo5} from "./src/basic_ui/layout/FlexBoxDemo5";

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <FlexBoxDemo5/>
  );
};


export default App;
