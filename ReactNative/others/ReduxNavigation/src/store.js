import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { NavigationActions } from 'react-navigation'
import NavigationStack from './navigationStack'
import {ACTION_NEXT} from './actions'

const ActionForFirstPage = NavigationStack.router.getActionForPathAndParams(
  'screen1'
)

const ActionForSecondPage = NavigationStack.router.getActionForPathAndParams(
  'screen2'
)
const initialState = NavigationStack.router.getStateForAction(ActionForFirstPage)

const nav = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NEXT: {
      return NavigationStack.router.getStateForAction(ActionForSecondPage, state)
    }
    case 'Navigation/BACK': {
      return NavigationStack.router.getStateForAction(NavigationActions.back(), state)
    }
  }
  return state
}

const reducers = combineReducers({nav})

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const configureStore = preloadedState => {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(middleware, createLogger)
    )
  )
}

export const store = configureStore()
