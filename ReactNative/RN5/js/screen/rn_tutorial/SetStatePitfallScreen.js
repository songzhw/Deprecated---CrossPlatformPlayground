import React, {Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {connect} from 'react-redux'

class SetStatePitfallScreen extends Component {
  state = {num: 10}

  render() {
    return (
      <View style={styles.root}>
        <Button title="increase state 3 times" onPress={this.clickPitfall}/>
        <Button title="[1] setState({}, callback)" onPress={this.clickPitfall2}/>
        <Button title="[2] setState({}, nestedCallback)" onPress={this.clickPitfall3}/>
        <Text style={{fontSize: 50, textAlign: 'center'}}>{this.state.num}</Text>
      </View>
    )
  }

  clickPitfall = () => {
    this.setState({num: this.state.num + 1})
    this.setState({num: this.state.num + 1})
    this.setState({num: this.state.num + 1})
  }

  clickPitfall2 = () => {
    this.setState((prevState, pros) => {
      return {num: prevState.num + 1}
    })
    this.setState((prevState, pros) => {
      return {num: prevState.num + 1}
    })
    this.setState((prevState, pros) => ({
      num: prevState.num + 1
    }))
  }

  clickPitfall3 = () => {
    this.setState({num: this.state.num + 1}, () => {
      this.setState({num: this.state.num + 1}, () => {
        this.setState({num: this.state.num + 1})
      })
    })
  }

  checkState = () => {
    console.log(`${JSON.stringify(this.state)}`)
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default SetStatePitfallScreen