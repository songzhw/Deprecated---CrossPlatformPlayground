import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import * as RNLocalize from "react-native-localize";

class SettingScreen extends Component{

  componentWillMount() {
    console.log("szw" + JSON.stringify(RNLocalize.getLocales()));
    console.log("szw" + RNLocalize.getCurrencies());
  }

  render(){
    return (
      <View style={styles.root}>
        <Text>SettingScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  return {

  }
}

export default SettingScreen
// export default connect(mapStateToProps)(SettingScreen)

/*

当在language列表中有两种语言, 且中文排在英文之前时:

* RNLocalize.getLocales() :
[
  {
    "scriptCode": "Hans",
    "isRTL": false,
    "countryCode": "CN",
    "languageTag": "zh-Hans-CN",
    "languageCode": "zh"
  },
  {
    "isRTL": false,
    "countryCode": "US",
    "languageTag": "en-US",
    "languageCode": "en"
  }
]

* RNLocalize.getCurrencies() :
     CNY, USD

 */