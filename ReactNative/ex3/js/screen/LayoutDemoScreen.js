import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";

class LayoutDemoScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <FlatList
          horizontal={true}
          data={[1, 2, 3]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({item}) => <ReadedComponent/>}
        />

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
