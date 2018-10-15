import React from 'react'
import ExtStyle from 'react-native-extended-stylesheet'
import Home from './screens/Home'

ExtStyle.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#f0f0f0',
  $border: '#979797',
  $inputText: '#797979',
})
export default () => <Home />
