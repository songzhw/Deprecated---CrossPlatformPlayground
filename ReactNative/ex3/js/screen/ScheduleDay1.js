import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import {tryDay1} from "../redux/actionSchedule";

class ScheduleDay1 extends Component {

  componentDidMount() {
    console.log('\n\n')
    this.props.dispatch(tryDay1())
  }

  render() {
    console.log(`szw Day1 render() : ${JSON.stringify(this.props.schedulers1)}`)
    return (
      <View style={styles.root}>
        <Text style={styles.gantt}>Gantt Day 1</Text>
        <FlatList
          data={this.props.schedulers1}
          renderItem={this.renderEachSchedule}
          keyExtractor={(item, index) => `item ${index}`}
        />
      </View>
    )
  }

  renderEachSchedule(row) {
      /*
       now the item becomse:
       {
         "item":{"startTime":"10:00","endTime":"10:30","topic":{"title":"Android Dev in 10 minutes","desp":""}},
         "index":1,
         "separators":{}
       }

       原来我们写的是:  renderItem = {({item}) => <Text> {item.topic.title </Title>
       原来没有item也行, 是因为用了desctructure变量的特性
       */
      let {item} = row
      return (
          <View>
            <Text> {item.startTime} - {item.endTime}</Text>
            <Text style={{ fontSize: 22 }}> {item.topic.title} </Text>
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

})

const mapStateToProps = (state) => {
    console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
    return {
        schedulers1: state.reduceSchedule.schedules
    }
}

// export default ScheduleDay1
export default connect(mapStateToProps)(ScheduleDay1)