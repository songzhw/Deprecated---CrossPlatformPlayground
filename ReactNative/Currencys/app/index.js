import React from 'react'
import ExtStyle from 'react-native-extended-stylesheet'
// import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'

ExtStyle.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $lightGray: '#e1e1e1',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $darkText: '#343434',
})

export default () => <CurrencyList />
