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
          renderItem={({ item }) => <Text style={{ fontSize: 22 }}> {item.topic.title} </Text>}
          keyExtractor={(item, index) => `item ${index}`}
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

})

const mapStateToProps = (state) => {
    console.log(`szw Day1 mapStateToProps: ${JSON.stringify(state)}`)
    return {
        schedulers1: state.reduceSchedule.schedules
    }
}

// export default ScheduleDay1
export default connect(mapStateToProps)(ScheduleDay1)