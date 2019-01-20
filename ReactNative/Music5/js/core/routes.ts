import {createStackNavigator, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import PlayScreen from "../screen/PlayScreen";

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {headerTitle: 'Home'},
    },
    PlayScreen: {
      screen: PlayScreen,
      navigationOptions: {headerTitle: 'Play Music'},
    },
  },
  {
    headerMode: 'screen'
  }
)

export default HomeStack