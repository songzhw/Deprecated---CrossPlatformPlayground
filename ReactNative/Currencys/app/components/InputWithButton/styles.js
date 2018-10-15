import { StyleSheet } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

export default ExtStyle.create({
  $buttonBgColorBase: '$white',
  $buttonBgColorModifier: 0.1,
  container: {
    alignItems: 'center',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
  },
  input: {
    height: INPUT_HEIGHT,
  },
})
