import React, {Component, PureComponent} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {connect} from 'react-redux'
import reduxRecommend, {fetchRecomendHome, IRecommendResponse} from "../redux/reduxRecommend";
import {IReduxProps} from "../redux/CoreProps";
import {IReduxState} from "../redux/store";

interface Props extends IReduxProps, IRecommendResponse {
}

class RecommedScreen extends Component<Props> {

  componentWillMount() {
    this.props.dispatch(fetchRecomendHome())
  }

  componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
    console.log(`szw update1 : ${JSON.stringify(nextProps)}`)
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log(`szw update2`)
    return true
  }

  render() {
    // let third = this.props.banners[2]
    // let src = {uri: third.img}
    console.log(`szw props = ${JSON.stringify(this.props)}\n`)
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
        <Image source={{uri: "https://i.ytimg.com/vi/QL3T2Nzcqcs/maxresdefault.jpg"}} style={{height: 300}} />
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
  return {...state.responseRecommend}
}

export default connect(mapStateToProps)(RecommedScreen)