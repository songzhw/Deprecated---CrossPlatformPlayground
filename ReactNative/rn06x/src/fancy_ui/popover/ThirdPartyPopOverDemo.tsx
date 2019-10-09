import React, { useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button, Image } from "react-native";
import Popover from "react-native-popover-view";

interface IProps extends ViewProps {
}

export const ThirdPartyPopOverDemo = (props: IProps) => {
  const [isVisible, setVisible] = useState(false);
  const iv = useRef(null);

  function showPopOver() {
    setVisible(true);
  }

  function closePopOver() {
    setVisible(false);
  }


  return (
    <View style={styles.container}>
      <Button title={"click me"} onPress={showPopOver}/>
      <Image ref={iv} source={require("../../../res/images/category_app.png")}/>

      <Popover
        isVisible={isVisible}
        fromView={iv.current}
        onRequestClose={closePopOver}
      >
        <Text>Here is Context Menu</Text>
      </Popover>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});