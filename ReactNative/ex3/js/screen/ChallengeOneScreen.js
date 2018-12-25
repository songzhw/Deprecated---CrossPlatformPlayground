import React, { Component } from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {fetchChallengeOnePage} from "../redux/reduxChanllengeOne";
import ReadedComponent from "./FirstScreen";

class ChallengeOneScreen extends Component{

  componentDidMount() {
    this.props.dispatch(fetchChallengeOnePage(1))
  }

  render(){
    return (
      <View style={styles.root}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.users}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={this.renderItem}
          numColumns={2}
        />
      </View>
    )
  }

  renderItem = ({item}) => {
    return (
      <Text>{item.first_name} {item.last_name}</Text>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  console.log(`szw challenge01 : state = ${JSON.stringify(state.reduceChallenge1.length)}`)
  return {
    users: state.reduceChallenge1
  }
}

export default connect(mapStateToProps)(ChallengeOneScreen)