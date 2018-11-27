import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import ViewPager from '../component/ViewPager'

class UiScheduleScreen extends Component {
  render() {
    return (
      <View>
        <ViewPager
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default connect()(UiScheduleScreen)