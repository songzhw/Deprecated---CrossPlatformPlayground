import React from "react";
import { View, Text } from "react-native";

function sleep(milliseconds) {
  let start = new Date();
  var now;
  while (true) {
    now = new Date();
    if (now - start >= milliseconds) {
      break;
    }
  }
}

// values : string[]
export const GoodRecursive = React.memo(({ values }) => {
    if (values.length <= 0) {
      return null;
    }

    const [first, ...rest] = values;
    for (let i = 0; i < 3; i++) {
      sleep(2);
    }

    return (
      <View>
        <Text> {first} </Text>
        <GoodRecursive values={rest}/>
      </View>
    );

  },
  (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps)
);