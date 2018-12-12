import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import ScheduleDay1 from './ScheduleDay1'
import { ViewPager } from '../component/ViewPager'
import { tryDay1, tryDay2 } from '../redux/actionSchedule'

class ScheduleScreen extends Component {
  render() {
    return (
      <ViewPager style={styles.viewPager}>
        <View style={styles.pageStyle}>
          <ScheduleDay1 event={tryDay1} onPress={this.go2SessionDetail}/>
        </View>
        <View style={styles.pageStyle}>
          {/*<ScheduleDay1 event={tryDay2} onPress={this.go2SessionDetail}/>*/}
          <Text>Second page</Text>
        </View>
        <View style={styles.pageStyle}>
          <Text>Third page</Text>
        </View>
      </ViewPager>
    )
  }

  go2SessionDetail = (item, index, section) => {
    this.props.navigation.navigate('SessionDetailScreen', {
      title: item.topic.title,
      desp: item.topic.desp,
      start: item.startTime,
      end: item.endTime,
    })
  }

}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  pageStyle: {
    padding: 20,
  },
})

export default connect()(ScheduleScreen)