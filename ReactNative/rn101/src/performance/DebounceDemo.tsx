import React from "react";
import { Button, View } from "react-native";

// 你一直按吧, 只有最后一次点击2秒后我才响应你
export const DebounceDemo = () => {

  const save = () => {
    console.log(`save: `, new Date());
  };

  return (
    <View>
      <Button title="save until it's pause for 2s" onPress={save}/>
    </View>
  );
};
