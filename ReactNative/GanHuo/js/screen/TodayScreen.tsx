import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {requestToday} from "../redux/reduxGanHuo";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {ITodayResponse} from "../core/data/ResponseData";

interface Props extends IReduxProps, INavigationProps {
  payload: any[]
}

class TodayScreen extends Component<Props> {

  componentWillMount() {
    this.props.dispatch(requestToday())
  }

  render() {
    console.log(`szw render = ${JSON.stringify(this.props)}`)
    return (
      <View style={styles.root}>
        <Text>TodayScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  console.log(`szw mapper = ${JSON.stringify(state)}`)
  let {payload} = state.reducerGanHuo
  return {payload}
}

export default connect(mapStateToProps)(TodayScreen)