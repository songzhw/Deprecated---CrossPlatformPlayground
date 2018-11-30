import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import {fetchSchedule} from '../redux/action_schedule'

// import {connect} from 'react-redux'

class ScheduleDay1 extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSchedule(1))
  }


  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.gantt}>Gantt Day 1</Text>
        <FlatList
          data={[{ name: 'a' }, { name: 'b' }]}
          renderItem={ ({item}) => <Text style={{ fontSize: 22 }}> {item.name} </Text>}
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

export default ScheduleDay1
// export default connect()(ScheduleDay1)