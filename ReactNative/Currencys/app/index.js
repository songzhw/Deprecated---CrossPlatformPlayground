import React from 'react'
import ExtStyle from 'react-native-extended-stylesheet'
// import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'

ExtStyle.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#e1e1e1',
  $border: '#979797',
  $inputText: '#797979',
})
export default () => <CurrencyList />
