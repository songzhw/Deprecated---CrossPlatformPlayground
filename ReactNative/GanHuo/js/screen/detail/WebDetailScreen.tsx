import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {INavigationProps, IReduxProps} from "../../core/CoreProps";
import {NavigationScreenConfig, NavigationStackScreenOptions} from "react-navigation";
import {WebView} from "react-native-webview";

interface Props extends IReduxProps, INavigationProps {
}

class WebDetailScreen extends Component<Props> {
  url = ""

  componentWillMount() {
    let {navigation} = this.props
    this.url = navigation.getParam("url", "")

    let title = navigation.getParam("title", "")
    navigation.setParams({title})
  }

  render() {
    return (
      <View style={styles.root}>
        <WebView
          source={{uri: this.url}}
          onLoadProgress={e=> console.log(`szw WebView.progress = ${e.nativeEvent.progress}`)}
        />
      </View>
    )
  }

  static navigationOptions: NavigationScreenConfig<NavigationStackScreenOptions> = ({navigation}) => {
    let params = navigation.state.params || {}
    console.log(`szw 02: ${params.title}`)
    return {
      headerTitle: params.title,
    }
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  return {}
}

export default connect(mapStateToProps)(WebDetailScreen)