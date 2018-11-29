import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import ViewPager from '../component/ViewPager'
import ScheduleDay1 from './ScheduleDay1'

class UiScheduleScreen extends Component {
  render() {
    return (
      <ViewPager style={styles.viewPager}>
        <View style={styles.pageStyle}>
          <ScheduleDay1/>
        </View>
        <View style={styles.pageStyle}>
          <Text>Second page</Text>
        </View>
        <View style={styles.pageStyle}>
          <Text>Third page</Text>
        </View>
      </ViewPager>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
})

export default connect()(UiScheduleScreen)