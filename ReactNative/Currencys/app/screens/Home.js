import React from 'react'
import { View, StatusBar, Text } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'

export default () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
)
// vs light这个theme中 html.attribute是f00红色, 不是错误, 注意哦
