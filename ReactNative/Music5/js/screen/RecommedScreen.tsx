import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {fetchRecomendHome} from "../redux/reduxRecommend";
import {IReduxProps} from "../redux/CoreProps";
import {IReduxState} from "../redux/store";

interface Props extends IReduxProps{}

class RecommedScreen extends Component<Props>{

  componentWillMount() {
    this.props.dispatch(fetchRecomendHome())
  }

  render(){
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: IReduxState) => {
  console.log(`szw map state = ${JSON.stringify(state)}`)
  return {

  }
}

export default connect(mapStateToProps)(RecommedScreen)