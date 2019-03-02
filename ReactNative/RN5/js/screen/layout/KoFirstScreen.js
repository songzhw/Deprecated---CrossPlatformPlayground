import React, {Component} from 'react'
import {View, StyleSheet, Text, FlatList, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../../component/ReadedComponent";
import FirstCarousel from "../../component/FirstCarousel";
import {createRequestAction} from "../../redux/middlewares/HttpMiddlewares";
import {GOT_FIRST_PAGE_INFO, TRY_FIRST_PAGE_INFO} from "../../redux/F8Reducer";
import {API_FIRST_PAGE} from "../../core/apiConstants";


export class KoFirstScreen extends Component {
  state = {
    listHeight: 0,
    listWidth: 0
  }

  componentDidMount() {
    let request = createRequestAction(TRY_FIRST_PAGE_INFO, GOT_FIRST_PAGE_INFO, API_FIRST_PAGE)
    this.props.dispatch(request)
  }

  render() {
    return (
      <ScrollView style={styles.root}>
        {/*to make the FlatList's size not too big*/}
        <View style={{height: 286}}>
          <FlatList
            style={styles.recentRead}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={this.props.open}
            keyExtractor={(item, index) => `${item}_${index}`}
            renderItem={this.renderItem}
            ListEmptyComponent={this.renderEmptyView()}
            onLayout={e => this.setState({
              listHeight: e.nativeEvent.layout.height,
              listWidth: e.nativeEvent.layout.width
            })}
          />
        </View>

        <FirstCarousel title="Recommended"/>
        <FirstCarousel title="Popular Book"/>
        <FirstCarousel title="Recommended"/>

      </ScrollView>
    )
  }

  onPageChanged = (num) => {
    //TODO
  }

  renderItem = ({item}) => {
    return (
      <ReadedComponent data={item}/>
    )
  }

  renderEmptyView = () => {
    let {listHeight, listWidth} = this.state
    return (
      <View style={{
        height: listHeight,
        width: listWidth,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}>
        <Image source={require('../../../assets/ic_open_book.png')}/>
        <Text style={{fontSize: 21, marginTop: 10}}>You don't have any read book</Text>
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
  console.log(`szw KoFirstPage mapState2Props() : ${JSON.stringify(state)}`)
  let {opened} = state.F8Reducer
  if(opened === undefined){
    return {}
  }
  return {open: opened}
}

export default connect(mapStateToProps)(KoFirstScreen)
