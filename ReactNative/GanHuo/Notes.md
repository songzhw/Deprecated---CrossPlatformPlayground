## react-native-drawer-layout

* API is here: [https://facebook.github.io/react-native/docs/drawerlayoutandroid.html#content](https://facebook.github.io/react-native/docs/drawerlayoutandroid.html#content) (just as same as DrawerLayoutAndroid)

* Example is here: [https://github.com/DanielMSchmidt/DrawerLayoutHeavyLoadExample/blob/master/DrawerLayoutExample.js](https://github.com/DanielMSchmidt/DrawerLayoutHeavyLoadExample/blob/master/DrawerLayoutExample.js)


## react navigation

v2.5.3 [https://blog.csdn.net/weixin_42336002/article/details/80894929](https://blog.csdn.net/weixin_42336002/article/details/80894929)
v2.9.1 [https://www.jianshu.com/p/2f575cc35780](https://www.jianshu.com/p/2f575cc35780)


### config the header bar
https://reactnavigation.org/docs/en/headers.html


#### 1. 不能重复

```javascript

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Today's Recommendation",
      }
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerTitle: "Today's Recommendation",
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'}
    },
  }
)

export default HomeStack
```


```javascript

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLable: "Home",
    headerTitle: () => (
      <Image source={require('../../assets/icon_menu.png')}/>
    )
  }
}
```

This is not gonna work. You will only see the "Today's Recommendation"
So you can not override twice. 
Or you can, but the config in the 'route.js' will always override the config in your screen.js


If the HomeScreen does not have navigationOptions, and the stackNavigator has navigationOptions
, and HomeScreen has its navigationOptions
then screen will display a menu icon at the left as the title!

#### 2. header bar's height
```javascript
import {Header} from 'react-navigation'

Header.HEIGHT
```

#### 3. global "going back" logic
put the "navigation.goBack()" in the route.js

#### 4. <Drawer>
onDrawerSlide={ (e)=> console.log(`szw2 slide => ${JSON.stringify(e)}`) }
结果类似: 
{"nativeEvent":{"offset":0}}
{"nativeEvent":{"offset":0.005696248435539386}}

关闭时, offset从1到0
打开时, offset从0到1
