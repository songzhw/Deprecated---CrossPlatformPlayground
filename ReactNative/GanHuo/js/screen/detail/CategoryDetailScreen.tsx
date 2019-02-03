import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {Category} from "../../core/httpEngine";
import {INavigationProps, IReduxProps} from "../../core/CoreProps";

interface Props extends IReduxProps, INavigationProps {}

class CategoryDetailScreen extends Component<Props>{
  category = Category.beauty

  componentWillMount() {
    this.category = this.props.navigation.getParam("name", Category.beauty)
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
  return {

  }
}

export default connect(mapStateToProps)(CategoryDetailScreen)