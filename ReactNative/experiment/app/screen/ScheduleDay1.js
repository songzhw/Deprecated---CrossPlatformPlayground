import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

// import {connect} from 'react-redux'

class ScheduleDay1 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Gantt Day 1</Text>
        <FlatList
          data={[{name:'a'}, {name:'b'}]}
          renderItem = {item => <Text> {item.name} </Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

})

export default ScheduleDay1
// export default connect()(ScheduleDay1)