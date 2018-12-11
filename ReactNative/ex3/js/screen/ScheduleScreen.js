import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import ScheduleDay1 from './ScheduleDay1'
import { ViewPager } from '../component/ViewPager'

class ScheduleScreen extends Component {
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
    backgroundColor: '#4CAF50'
  },
  pageStyle: {
    padding: 20,
  },
})

export default connect()(ScheduleScreen)