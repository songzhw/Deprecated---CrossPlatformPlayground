import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";
import {tryFirstPageInfo} from "../redux/actionFirst";

class FirstScreen extends Component {

  componentDidMount() {
    this.props.dispatch(tryFirstPageInfo())
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{height: 286}}>
          <FlatList
            style={styles.recentRead}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[1, 2, 3]}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({item}) => <ReadedComponent/>}
          />
        </View>
        <Text>Second two </Text>
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
  recentRead: {
  }
})

const mapStateToProps = (state) => {
  console.log(`szw FirstPage mapState2Props() : ${JSON.stringify(state)}`)
  // state is {"reduceFirst": { "opened": [ {}, {} ] }, ...}
  return {}
}

export default connect(mapStateToProps)(FirstScreen)
