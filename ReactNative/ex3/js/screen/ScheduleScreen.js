import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import DaySessionList from './DaySessionList'
import { ViewPager } from '../component/ViewPager'
import { tryDay1 } from '../redux/actionSchedule'

class ScheduleScreen extends Component {
  componentDidMount() {
    console.log('\n\n')
    this.props.dispatch(tryDay1())
  }

  render() {
    return (
      <ViewPager style={styles.viewPager}>
        <View style={styles.pageStyle}>
          <DaySessionList sessions={this.props.sessions1} onPress={this.go2SessionDetail}/>
        </View>
        <View style={styles.pageStyle}>
          <DaySessionList sessions={this.props.sessions2} onPress={this.go2SessionDetail}/>
          {/*<Text>Second page</Text>*/}
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


const mapStateToProps = (state) => {
  console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
  let { day1, day2 } = state.reduceSchedule
  let dataDay1 = extractDayData(day1.schedules)
  let dataDay2 = extractDayData(day2.schedules)
  return {
    sessions1: dataDay1,
    sessions2: dataDay2
  }
}

function extractDayData(sessions){
  // {"startTime":"10:00","endTime":"10:30","topic":{"title":"Android Dev in 10 minutes","desp":""}},
  //没比较双层循环, 因为这会有大量的重复比对, 完全没必要. 所以这里借用一个map
  let map = new Map()
  for (let index in sessions) {  //index分别是0,1,2
    let item = sessions[index]
    let { startTime } = item
    if (map.has(startTime)) {
      let list = map.get(startTime)
      list.push(item)
    } else {
      const list = []
      list.push(item)
      map.set(startTime, list)
    }
  }

  let result = []
  map.forEach(function(value, key, map) {
    let obj = {}
    obj['key'] = key
    obj['data'] = value
    result.push(obj)
  })
  return result
}

export default connect(mapStateToProps)(ScheduleScreen)