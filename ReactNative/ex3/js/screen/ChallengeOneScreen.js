import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image} from 'react-native'
import {connect} from 'react-redux'
import {fetchChallengeOnePage} from "../redux/reduxChanllengeOne";
import ReadedComponent from "./FirstScreen";

class ChallengeOneScreen extends Component {
  state = {}

  componentDidMount() {
    this.props.dispatch(fetchChallengeOnePage(1))
  }

  render() {
    return (
      <View style={styles.root}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.users}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={this.renderListItem}
          numColumns={1}
        />
      </View>
    )
  }

  renderListItem = ({item, index}) => {
    return (
      <View style={[styles.itemInList, {backgroundColor: item.backgroundColor}]}>
        <Image style={styles.avatarInList} source={{uri: item.avatar}}/>
        <View style={styles.textContainerInList}>
          <Text style={styles.nameInList}>{index + 1}. {item.first_name} {item.last_name}</Text>
          <Text style={styles.emailInList}>{item.email}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  itemInList: {
    flexDirection: 'row'
  },
  avatarInList: {
    width: 100,
    height: 100,
    resizeMode: 'center'
  },
  textContainerInList: {
    flexDirection: 'column',
  },
  nameInList: {
    fontSize: 20,
    marginTop: 26,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInList: {
    fontSize: 17,
    marginTop: 9,
    color: 'blue'
  }
})

const mapStateToProps = (state) => {
  console.log(`szw challenge01 : state = ${JSON.stringify(state.reduceChallenge1.length)}`)
  return {
    users: state.reduceChallenge1
  }
}

export default connect(mapStateToProps)(ChallengeOneScreen)