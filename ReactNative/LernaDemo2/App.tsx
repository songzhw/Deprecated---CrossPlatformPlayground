import React from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";
import { add } from "@six/calculator";
import { multiple } from "./src/cal2";
import Chat from "@six/chat";

const App = () => {
  const value = add(10, 31);
  const value2 = multiple(3, 5);

  Chat.multiply(20, 30)
    .then(ret => console.log(`szw promise = ${ret}`));

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>10 + 31 = {value}</Text>
        <Text>3 x 5 = {value2}</Text>
      </SafeAreaView>
    </>
  );
};


export default App;
