import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";
import {ViewPager} from "../component/ViewPager";

class LayoutDemoScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ViewPager style={styles.viewPager} onPageChanged={num => this.onPageChanged(num)}>
          <ReadedComponent/>
          <ReadedComponent/>
          <ReadedComponent/>
          <ReadedComponent/>
        </ViewPager>
      </View>
    )
  }

  onPageChanged = (num) => {
    //TODO
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(LayoutDemoScreen)
