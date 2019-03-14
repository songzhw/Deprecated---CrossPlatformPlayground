import { createAppContainer, createStackNavigator } from "react-navigation";
import InputNameScreen from "../screen/InputNameScreen";


const routes = createStackNavigator(
  {
    InputNameScreen
  },
  {
    headerMode: "screen"
  }
);
export default createAppContainer(routes);
