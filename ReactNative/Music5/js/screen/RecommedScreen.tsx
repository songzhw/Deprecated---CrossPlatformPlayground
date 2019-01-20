import React, {Component, PureComponent} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {connect} from 'react-redux'
import {fetchRecomendHome, IRecommendResponse} from "../redux/reduxRecommend";
import {IReduxProps} from "../redux/CoreProps";
import {IReduxState} from "../redux/store";
import reducerRecommend from "../redux/reduxRecommend";

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
    let {banners} = this.props
    let src = {}
    if(banners !== undefined){
      let imgUrl = banners[0].img
      src = {uri: imgUrl}
    }
    console.log(`szw props = ${JSON.stringify(this.props)}`)
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
        <Image source={src} style={{height: 300}} />
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
  console.log(`szw map state = ${JSON.stringify(state.reducerRecommend)}`)
  return {...state.reducerRecommend}
}

export default connect(mapStateToProps)(RecommedScreen)