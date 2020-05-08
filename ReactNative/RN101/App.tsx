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

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <FlatListDemo/>
  );
};


export default App;
