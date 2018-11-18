import {createReactNavigationReduxMiddleware, createNavigationReducer} from 'react-navigation-redux-helpers'

export default (AppNavigator) => {
  const middleware = createReactNavigationReduxMiddleware("root", state => state.nav)
  const reducer = createNavigationReducer(AppNavigator)
  return {reducer, middleware}
}


