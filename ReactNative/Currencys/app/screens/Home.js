import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'

import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Button'
import { LastPrice } from '../components/Text'

const BASE_CURRENCEY = 'CAD'
const QUOTE_CURRENCY = 'RMB'
const BASE_PRICE = '100'
const QUOTE_PRICE = '5.1'
const LAST_PRICE = new Date()
const CONVERSION_RATE = 0.531

class Home extends Component {
  static propTpes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <Container>
        {/* 这里看样式, 是Status不在Container的水平/垂直都居中的限制的, 可能是StatusBar的特殊性  */}
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />

        {/*KeyboardAvoidingView.behavior:  padding, height, position*/}
        <KeyboardAvoidingView behavior="padding"> 
          <Logo />
          <InputWithButton
            buttonText={BASE_CURRENCEY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.changeText}
          />
          <InputWithButton
            buttonText={QUOTE_CURRENCY}
            onPress={this.handlePressQuotoCurrency}
            value={QUOTE_PRICE}
            editable={false}
          />
          <LastPrice
            date={LAST_PRICE}
            base={BASE_CURRENCEY}
            quote={QUOTE_CURRENCY}
            conversionRate={CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>

      </Container>
    )
  }

  handlePressBaseCurrency = () => {
    const {navigation} = this.props
    navigation.navigate('CurrencyList', {title: 'Base Currency'})
  }
  handlePressQuotoCurrency = () => {
    const {navigation} = this.props
    navigation.navigate('CurrencyList', {title: 'Quote Currency'})
  }
  changeText = () => {
    console.log('szw change text')
  }
  handleSwapCurrency = () => {
    console.log('szw swap currency')
  }
  handleOptionsPress = () => {
    console.log('szw click header option')
  }
}

export default Home
// vs light这个theme中 html.attribute是f00红色, 不是错误, 注意哦
// test222
