import {StyleSheet} from "react-native";
import {Header} from "react-navigation";

export const commonStyles = StyleSheet.create({
  //because I find the size of "headerLeft" is a litle more than header bar's heightZ
  imgBack: {
    width: Header.HEIGHT,
    height: Header.HEIGHT,
  },
  txtTitle: {
    fontSize: 20
  },
  txtSubtitle: {
    fontSize: 19
  },
  txtContent: {
    fontSize: 18
  }
})