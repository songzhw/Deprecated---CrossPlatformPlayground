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
import {RealmDemo1} from "./src/persist/realm/RealmDemo1";
import {PrepackagedDemo02} from "./src/persist/realm/PrepackagedDemo02";

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaView>
      <PrepackagedDemo02/>
    </SafeAreaView>
  );
};


export default App;
