import { StyleSheet } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'

export default ExtStyle.create({
  $udnerlayColor: '$border',

  row: {},
  text: {},
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  icon: {},
  iconVisible: {},
  checkIcon: {},
})
