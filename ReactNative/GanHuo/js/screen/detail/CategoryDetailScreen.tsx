import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {Category} from "../../core/httpEngine";
import {INavigationProps, IReduxProps} from "../../core/CoreProps";
import {requestCategory} from "../../redux/reduxGanHuo";

interface Props extends IReduxProps, INavigationProps {}

class CategoryDetailScreen extends Component<Props>{
  category = Category.beauty
  page = 1
  count = 10


  componentWillMount() {
    this.category = this.props.navigation.getParam("name", Category.beauty)

    this.props.dispatch(requestCategory(this.category, this.count, this.page))
  }

  render(){
    return (
      <View style={styles.root}>
        <Text>CategoryDetailScreen Screen : {this.category}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  console.log(`szw CategoryScreen.mapper = ${JSON.stringify(state)}`)
  return {
  }
}

export default connect(mapStateToProps)(CategoryDetailScreen)