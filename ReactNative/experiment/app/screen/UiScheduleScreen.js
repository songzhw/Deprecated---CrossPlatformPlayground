import React, { Component } from 'react'
import { View, StyleSheet, Text, ViewPagerAndroid } from 'react-native'
import { connect } from 'react-redux'
import ViewPager from '../component/ViewPager'

class UiScheduleScreen extends Component {
  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}>
          <Text>First page</Text>
        </View>
        <View style={styles.pageStyle}>
          <Text>Second page</Text>
        </View>
        <View style={styles.pageStyle}>
          <Text>Third page</Text>
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
})

export default connect()(UiScheduleScreen)