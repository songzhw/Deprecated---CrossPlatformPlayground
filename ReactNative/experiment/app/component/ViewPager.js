import React from 'react'
import { View, StyleSheet, Platform, ViewPagerAndroid, Text } from 'react-native'

class ViewPager extends React.Component {
  state = {
    selectedIndex: 0,
  }

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS()
    } else {
      return this.renderAndroid()
    }
  }

  renderIOS() {
    return undefined
  }

  renderAndroid() {
    return (
      <ViewPagerAndroid
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={this.onPageSelected}
      >
        {this.renderChildren()}
      </ViewPagerAndroid>
    )
  }

  renderChildren = () => {
    var pages = []
    pages.push(
      <View key={0}>
        <Text>First Page</Text>
      </View>
    )
    pages.push(
      <View key={1}>
        <Text>Second Page</Text>
      </View>
    )
    return pages
  }

  onPageSelected = () => {

  }

}

const styles = StyleSheet.create({})

export default ViewPager
