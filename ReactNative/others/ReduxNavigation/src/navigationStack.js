import { StackNavigator } from 'react-navigation'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

const NavigationStack = StackNavigator({
  screen1: {
    screen: FirstPage
  },
  screen2: {
    screen: SecondPage
  }
})

export default NavigationStack
