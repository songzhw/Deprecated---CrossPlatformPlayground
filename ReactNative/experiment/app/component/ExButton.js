import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const BUTTON_HEIGHT = 42

class ExButton extends React.Component {
  static height = BUTTON_HEIGHT

  static defaultProps = {
    fontSize: 18,
    opacity: 1,
  }

  render() {
    const { fontSize, opacity } = this.props
    const text = this.props.text && this.props.text.toUpperCase()
    const content = (
      <View style={[styles.button, {opacity}]}>
        <Text style={[styles.text, {fontSize}]}>{text}</Text>
      </View>
    )
    return (
      <TouchableOpacity style={styles.root} onPress={this.props.onPress}>
        {content}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    height: BUTTON_HEIGHT,
    width: 250,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(29, 86, 251, 1)',
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
})

export default ExButton