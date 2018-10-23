import React from 'react'
import ExtStyle from 'react-native-extended-stylesheet'
// import Home from './screens/Home'
// import CurrencyList from './screens/CurrencyList'
// import Options from './screens/Options'
import Theme from './screens/Theme'

ExtStyle.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BDF9d',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#e1e1e1',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $darkText: '#343434',
})

export default () => <Theme />
