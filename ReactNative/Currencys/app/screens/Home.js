import React, { Component } from 'react'
import { StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/InputWithButton'

const BASE_CURRENCEY = 'CAD'
const QUOTE_CURRENCY = 'RMB'
const BASE_PRICE = '100'
const QUOTE_PRICE = '5.1'

class Home extends Component {
  render() {
    return <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton buttonText={BASE_CURRENCEY} onPress={this.handlePressBaseCurrency} defaultValue={BASE_PRICE} keyboardType="numeric" onChangeText={this.changeText} />
        <InputWithButton buttonText={QUOTE_CURRENCY} onPress={this.handlePressQuotoCurrency} value={QUOTE_PRICE} editable={false} />
      </Container>
  }

  handlePressBaseCurrency = () => {
    console.log('szw press base currency')
  }
  handlePressQuotoCurrency = () => {
    console.log('szw press quote currency')
  }
  changeText = () => {
    console.log('szw change text')
  }
}

export default Home
// vs light这个theme中 html.attribute是f00红色, 不是错误, 注意哦
// test222
