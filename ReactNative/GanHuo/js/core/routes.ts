import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: "Today's Recommendation"},
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack