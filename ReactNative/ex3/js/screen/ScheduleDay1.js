import React, { Component } from 'react'
import { View, StyleSheet, Text, SectionList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { tryDay1 } from '../redux/actionSchedule'

class ScheduleDay1 extends Component {

  constructor(props) {
    super(props)
  }

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
          renderItem={this.renderItem}
          renderSectionHeader={({ section }) => <Text style={styles.title}> {section.key} </Text>}
          keyExtractor={(item, index) => `item ${index}`}
          ItemSeparatorComponent={() => <View style={styles.innerSeparator}/>}
          SectionSeparatorComponent={() => <View style={styles.sectionSeparator}/>}
        />
      </View>
    )
  }

// = = = = = = = = = = = = "this" bind pitfalls = = = = = = = = = = = =
  onItemClick = (item, index, section) => {
    this.props.navigation.navigate('SessionDetailScreen', {
      title: item.topic.title,
      desp: item.topic.desp,
      start: item.startTime,
      end: item.endTime
    })
  }

  // index是指在section中的index哦, 可不是总的索引哦.
  renderItem = ({ item, index, section }) => {
    return (
      <TouchableOpacity onPress={() => this.onItemClick(item, index, section)}>
        <Text style={styles.content}> {item.topic.title} </Text>
      </TouchableOpacity>
    )
  }
// = = = = = = = = = = = = "this" bind pitfalls = = = = = = = = = = = =

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
  innerSeparator: {
    backgroundColor: '#00ff00',
    height: 1,
  },
  sectionSeparator: {
    backgroundColor: '#ff0000',
    height: StyleSheet.hairlineWidth,
  },
  title: {
    flex: 1,
    fontSize: 23,
    backgroundColor: '#e1e1e1',
    fontWeight: 'bold',
    height: 42,
    textAlignVertical: 'center',
  },
  content: {
    fontSize: 20,
    height: 33,
    marginLeft: 20,
    marginTop: 6,
    marginBottom: 6,
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

