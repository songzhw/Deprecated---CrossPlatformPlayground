import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Image } from "react-native";

interface IProps extends ViewProps {
}

export const ThirdPartyPopOverDemo = (props: IProps) => {
  const [isVisible, setVisible] = useState(false);

  function showPopOver() {
    setVisible(true);
  }

  function closePopOver() {
    setVisible(false);
  }


  return (
    <View style={styles.container}>
      <Button title={"click me"} onPress={showPopOver}/>
      <Image source={require("../../../res/images/category_app.png")}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});