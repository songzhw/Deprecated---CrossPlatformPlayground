import {combineReducers, createStore} from "redux";
import reducerRecommend from './reduxRecommend'

const reducers = combineReducers({
  reducerRecommend
})
const store = createStore(reducers)

export default store