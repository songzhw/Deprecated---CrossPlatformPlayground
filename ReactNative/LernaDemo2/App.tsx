import React from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { add } from "@six/calculator";

const App = () => {
  const value = add(10, 31);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello World {value}</Text>
      </SafeAreaView>
    </>
  );
};


export default App;
