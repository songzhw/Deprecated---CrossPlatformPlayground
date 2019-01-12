import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {tryFirstPageInfo} from "../redux/reducerFirst";
import {DispatchProps} from "../redux/store";

interface Props extends DispatchProps{

}

class FirstScreen extends Component<Props>{

  componentDidMount() {
    this.props.dispatch(tryFirstPageInfo())
  }


  render(){
    return (
      <View style={styles.root}>
        <Text>FirstScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  console.log(`szw FirstPage mapState2Props() : ${JSON.stringify(state)}`)
  let {opened} = state.reducerFirst
  return {open: opened}
  return {}
}

export default connect(mapStateToProps)(FirstScreen)