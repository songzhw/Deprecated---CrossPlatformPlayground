import {connect} from 'react-redux'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import reduce from './redux_nav'
import HomeStack from './route'

const {reduxNavReducer, reduxNavMiddleware} = reduce(HomeStack)

const AppNavigation = reduxifyNavigator(HomeStack, 'root')
const mapStateToProps = state => ({staet: state.nav})
const HighOrderNavigator = connect(mapStateToProps)(AppNavigation)

export {HighOrderNavigator, reduxNavReducer, reduxNavMiddleware}