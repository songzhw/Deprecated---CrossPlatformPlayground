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
    const {children} = this.props
    return React.Children.map(children, (child, i) => (
      <View style={styles.pageStyle} key={"r_"+i}>
        {child}
      </View>
    ))
  }

  onPageSelected = () => {

  }

}

const styles = StyleSheet.create({
    pageStyle: {
    alignItems: 'center',
    padding: 20,
  },}
  })

export default ViewPager
