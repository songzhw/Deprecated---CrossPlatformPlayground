import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {fetchChallengeOnePage, SORT_AZ_ACTION, SORT_NONE_ACTION, SORT_ZA_ACTION} from "../redux/reduxChanllengeOne";

class ChallengeOneScreen extends Component {
  sortTypes = [SORT.NONE, SORT.AZ, SORT.ZA];
  sortImages = [require('../../assets/ic_sort_az.png'), require('../../assets/ic_sort_za.png'), require('../../assets/ic_refresh.png')]

  state = {
    sortIndex: 0,
  }

  componentDidMount() {
    this.props.dispatch(fetchChallengeOnePage(1))
  }

  render() {
    let sortImage = this.sortImages[this.state.sortIndex]

    return (
      <View style={styles.root}>

        <View style={styles.headerContainer}>
          <Text style={{fontSize: 18, marginLeft: 20}}>All Users</Text>

          <TouchableOpacity style={[styles.iconRight, {right: 12}]} onPress={this.clickSort}>
            <Image source={sortImage}/>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.iconRight, {right: 52}]} onPress={this.clickLayout}>
            <Image style={styles.imgLayout} source={require('../../assets/ic_grid.png')}/>
          </TouchableOpacity>

        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.users}
          keyExtractor={(item, index) => `${item}_${index}`}
          renderItem={this.renderListItem}
          numColumns={1}
          ListEmptyComponent={(<Text> Empty </Text>)}
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

  clickSort = () => {
    let newIndex = (this.state.sortIndex + 1) % 3
    if(newIndex === 1){
      this.props.dispatch(SORT_AZ_ACTION)
    } else if(newIndex === 2){
      this.props.dispatch(SORT_ZA_ACTION)
    } else {
      this.props.dispatch(SORT_NONE_ACTION)
    }
    this.setState({...this.state, sortIndex: newIndex})
  }



  clickLayout = () => {
    console.log(`click layout`)
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },


  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
  },
  iconRight: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },


  itemInList: {
    flexDirection: 'row'
  },
  avatarInList: {
    width: 100,
    height: 100,
    resizeMode: 'center',
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

const SORT = Object.freeze({
  NONE: 'None',
  AZ: 'AZ',
  ZA: 'ZA'
})