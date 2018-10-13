import React from 'react'
import { View } from 'react-native'
import ExtStyle from 'react-native-extended-stylesheet'
import { Container } from '../components/Container'

ExtStyle.build({
  $primaryBlue: '#4F6D7A',
})

export default () => (
  <Container>
    <View />
  </Container>
)
