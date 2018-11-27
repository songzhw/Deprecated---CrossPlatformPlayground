// for those button that need to show "in progress" after getting a click
import React from 'react'
import { StyleSheet } from 'react-native'
import ExButton from './ExButton'

class ActionButton extends React.Component {
  state = {
    isWorking: false,
  }

  render() {
    if (this.state.isWorking) {
      return (
        <ExButton text="Please waiting..." onPress={() => {}}/>
      )
    } else {
      // TODO
    }
  }

}

const styles = StyleSheet.create({})

export default ActionButton