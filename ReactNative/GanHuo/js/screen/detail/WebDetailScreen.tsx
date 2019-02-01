import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {INavigationProps, IReduxProps} from "../../core/CoreProps";
import {NavigationScreenConfig, NavigationStackScreenOptions} from "react-navigation";

interface Props extends IReduxProps, INavigationProps{}

class WebDetailScreen extends Component<Props>{
  url = ""

  componentWillMount() {
    let {navigation} = this.props
    this.url = navigation.getParam("url", "")
  }

  render(){
    return (
      <View style={styles.root}>
        <Text> {this.url} </Text>
      </View>
    )
  }

  static navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions> = ({navigation}) => {
    return {
      headerTitle: "福利 详情",
    }
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

export default connect(mapStateToProps)(WebDetailScreen)