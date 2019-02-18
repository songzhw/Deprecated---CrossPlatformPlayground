import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {TRY_SCHEDULE} from "../../redux/F8Reducer";
import TextIndicator from "../../component/TextIndicator";
import {ViewPager} from "../../component/ViewPager";
import DaySessionList from "../../component/DaySessionList";

class F8ScheduleScreen extends Component {

  state = {
    selectedIndex: 0
  }

  componentDidMount() {
    //TODO
    this.props.dispatch({type: TRY_SCHEDULE})
  }

  render() {
    if(this.props.sessions1 === undefined) {
      return <View/>
    }

    return (
      <View style={styles.root}>
        <TextIndicator titles={['Day1', 'Day2']} selectedIndex={this.state.selectedIndex}/>
        <ViewPager style={styles.viewPager} onPageChanged={num => this.onPageChanged(num)}>
          <View style={styles.pageStyle}>
            <DaySessionList sessions={this.props.sessions1} onPress={this.go2SessionDetail}/>
          </View>
          <View style={styles.pageStyle}>
            <DaySessionList sessions={this.props.sessions2} onPress={this.go2SessionDetail}/>
          </View>
        </ViewPager>
      </View>
    )
  }

  onPageChanged = (num) => {
    this.setState({selectedIndex: num})
  }

  go2SessionDetail = (item, index, section) => {
    this.props.navigation.navigate('F8SessionDetailScreen', {
      title: item.topic.title,
      desp: item.topic.desp,
      start: item.startTime,
      end: item.endTime,
    })
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


// 刚创建页面, 还没走到componentDidiMount(), 这里就会调用一次
// 所以原来已经有的数据, 这里可能不适用, 故有层过滤最好
const mapStateToProps = (state) => {
  console.log(`szw schedule mapStateToProps: ${JSON.stringify(state)}`)
  let {day1, day2} = state.F8Reducer

  // 加一层过滤. 最开始进入, 还没发起TRY_SCHEDULE请求时, 就不要走了
  if(day1 === undefined){
    return {}
  }

  let dataDay1 = extractDayData(day1.schedules)
  let dataDay2 = extractDayData(day2.schedules)
  return {
    sessions1: dataDay1,
    sessions2: dataDay2,
  }
}

function extractDayData(sessions) {
  // {"startTime":"10:00","endTime":"10:30","topic":{"title":"Android Dev in 10 minutes","desp":""}},
  //没比较双层循环, 因为这会有大量的重复比对, 完全没必要. 所以这里借用一个map
  let map = new Map()
  for (let index in sessions) {  //index分别是0,1,2
    let item = sessions[index]
    let {startTime} = item
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
  map.forEach(function (value, key, map) {
    let obj = {}
    obj['key'] = key
    obj['data'] = value
    result.push(obj)
  })
  return result
}

export default connect(mapStateToProps)(F8ScheduleScreen)