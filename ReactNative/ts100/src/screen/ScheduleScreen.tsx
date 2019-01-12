import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {Schedule, trySchedule} from "../redux/reducerSchedule";
import {DispatchProps, SectionListData} from "../core/CoreProps";
import {ReduxState} from "../redux/store";

interface Props extends DispatchProps{
}

class ScheduleScreen extends Component<Props>{
  state = {
    selectedIndex : 0
  }

  componentDidMount() {
    this.props.dispatch(trySchedule())
  }

  render(){
    return (
      <View style={styles.root}>
        <Text>ScheduleScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 4,
  },
  viewPager: {},
  pageStyle: {
    padding: 20,
  },
})


const mapStateToProps = (state: ReduxState) => {
  console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
  let { day1, day2 } = state.reducerSchedule
  let dataDay1 = extractDayData(day1.schedules)
  let dataDay2 = extractDayData(day2.schedules)
  return {
    sessions1: dataDay1,
    sessions2: dataDay2,
  }
}

function extractDayData(sessions: Schedule[]) {
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

  let result : SectionListData[] = []
  map.forEach(function(value, key, map) {
    let obj : SectionListData= {key: "", data: []}
    obj['key'] = key
    obj['data'] = value
    result.push(obj)
  })
  return result
}

export default connect(mapStateToProps)(ScheduleScreen)