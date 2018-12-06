import React, { Component } from 'react'
import { View, StyleSheet, Text, SectionList } from 'react-native'
import { connect } from 'react-redux'
import { tryDay1 } from '../redux/actionSchedule'

class ScheduleDay1 extends Component {

  componentDidMount() {
    console.log('\n\n')
    this.props.dispatch(tryDay1())
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.gantt}>Gantt Day 1</Text>
        <SectionList
          sections={this.props.schedulers1}
          renderItem={({ item, index, section }) => <Text key={index}> {item.topic.title} </Text>}
          renderSectionHeader={({ section }) => <Text style={{ fontSize: 22 }}> {section.key} </Text>}
          keyExtractor={(item, index) => `item ${index}`}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gantt: {
    fontSize: 18,
    height: 40,
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: '#e2e2e2',
    height: StyleSheet.hairlineWidth,
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
  let { schedules } = state.reduceSchedule

  // {"startTime":"10:00","endTime":"10:30","topic":{"title":"Android Dev in 10 minutes","desp":""}},
  //没比较双层循环, 因为这会有大量的重复比对, 完全没必要. 所以这里借用一个map
  let map = new Map()
  for (let index in schedules) {  //index分别是0,1,2
    let item = schedules[index]
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
  console.log(`\nresult = ${JSON.stringify(result)}\n`)
  return {
    schedulers1: result,
  }
}

// export default ScheduleDay1
export default connect(mapStateToProps)(ScheduleDay1)