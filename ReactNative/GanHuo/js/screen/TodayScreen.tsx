import React, {Component} from 'react'
import {View, StyleSheet, Text, SectionList} from 'react-native'
import {connect} from 'react-redux'
import {requestToday} from "../redux/reduxGanHuo";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {ITodayResponse} from "../core/data/ResponseData";

interface Props extends IReduxProps, INavigationProps {
  payload: any[]
}

class TodayScreen extends Component<Props> {

  componentWillMount() {
    this.props.dispatch(requestToday())
  }

  render() {
    let {payload} = this.props
    console.log(`szw render = ${JSON.stringify(payload[5])}`)
    return (
      <View>
        <SectionList
          keyExtractor={(item, index) => item._id}
          sections={[
            {key: 'one', data: [{_id: '1'}, {_id: '2'}]},
            {key: 'two', data: [{_id: '3'}]},
            ]}
          renderItem={ ({item,index,section}) => <Text>{item._id}</Text> }
          renderSectionHeader={ ({section}) => <Text> {section} </Text> }
        />
      </View>
    )
  }


  // renderItem={this.renderItem}
  // renderSectionHeader={this.renderSectioHeader}

  renderSectioHeader = ({section}) => {
    return (
      <Text> {section} </Text>
    )
  }

  renderItem = ({item, index, section}) => {
    return (
      <Text>{item._id}</Text>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  // console.log(`szw mapper = ${JSON.stringify(state)}`)
  let {payload} = state.reducerGanHuo
  return {payload}
}

export default connect(mapStateToProps)(TodayScreen)