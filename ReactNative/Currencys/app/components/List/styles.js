import { StyleSheet } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'

export default ExtStyle.create({
  $udnerlayColor: '$border',

  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    color: '$darkText',
    fontSize: 18,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
  },
  checkIcon: {
    width: 18,
  },
})
