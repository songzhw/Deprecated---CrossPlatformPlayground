import React from 'react'
import {View, StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native'

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
  style: any
}

class PlayButton extends React.Component<Props> {
  state = {}

  render() {
    let {onPress, url, style} = this.props
    return (
      <TouchableOpacity onPress={onPress} style={[style, {alignItems: 'center'}]}>
        <Image source={url} resizeMode='center' style={styles.button}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
  }
})

export default PlayButton