import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";
import {tryFirstPageInfo} from "../redux/actionFirst";


class FirstScreen extends Component {
  state = {
    listHeight: 0,
    listWidth: 0
  }

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
            data={[]}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={({item}) => <ReadedComponent/>}
            ListEmptyComponent={this.renderEmptyView()}
            onLayout={e => this.setState({
              listHeight: e.nativeEvent.layout.height,
              listWidth: e.nativeEvent.layout.width
            })}
          />
        </View>
        <Text>Second two </Text>
      </View>
    )
  }

  onPageChanged = (num) => {
    //TODO
  }

  renderEmptyView = () => {
    let {listHeight, listWidth} = this.state
    return (
      <View style={{height: listHeight, width: listWidth, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../../assets/ic_open_book.png')}/>
        <Text style={{fontSize: 21}}>You don't have any read book</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  recentRead: {},
  emptyView: {}
})

const mapStateToProps = (state) => {
  console.log(`szw FirstPage mapState2Props() : ${JSON.stringify(state)}`)
  // state is {"reduceFirst": { "opened": [ {}, {} ] }, ...}
  return {}
}

export default connect(mapStateToProps)(FirstScreen)
