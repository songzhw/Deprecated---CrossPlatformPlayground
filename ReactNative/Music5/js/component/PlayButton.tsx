import React from 'react'
import {View, StyleSheet, Image, TouchableHighlight, ImageSourcePropType} from 'react-native'

// How to handle {...props} in TypeScript
/*
JS:
const Component = ({url, onPress, ...props}) => {
  return (<Text {...props}>...</Text>)
}
 */
interface Props {
  onPress: () => void,
  url: ImageSourcePropType,

}

class PlayButton extends React.Component<Props> {
  state = {}

  render() {
    let {onPress, url, ...props} = this.props
    return (
      <TouchableHighlight onPress={onPress} {...props}>
        <Image source={url} resizeMode='center'/>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({})

export default PlayButton