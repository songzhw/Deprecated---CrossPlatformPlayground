import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'

const BASE_CURRENCEY = 'CAD'
const QUOTE_CURRENCY = 'RMB'
const BASE_PRICE = '100'
const QUOTE_PRICE = '5.1'

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
      </Container>
    )
  }
}

export default Home
// vs light这个theme中 html.attribute是f00红色, 不是错误, 注意哦
// test222
