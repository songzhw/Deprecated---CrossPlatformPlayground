import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'

class LoadingListScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={({item}) => <Text style={{fontSize: 45}}> {item} </Text>}
          ListFooterComponent={() => <ActivityIndicator color='red' size='large'/>}
          onEndReachedThreshold={0.3}
          onEndReached={()=> console.log(`szw reach end`)}
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

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(LoadingListScreen)