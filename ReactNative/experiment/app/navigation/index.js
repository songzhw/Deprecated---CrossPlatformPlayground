import {connect} from 'react-redux'
import {reduxifyNavigator} from 'react-navigation-redux-helpers'
import reducer from './redux_nav'
import HomeStack from './route'

const {navReducer, middleware} = reducer(HomeStack)

const highOrderStack = reduxifyNavigator(HomeStack, 'root')
const mapStateToProps = state => ({staet: state.nav})
const HighOrderNavigator = connect(mapStateToProps)(highOrderStack)

export {HighOrderNavigator, navReducer, middleware}