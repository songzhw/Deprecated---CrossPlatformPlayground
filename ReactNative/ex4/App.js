// import React from 'react'
// import {Provider as ReduxProvider} from 'react-redux'
// import {Provider as FelaProvider} from 'react-fela'
// import {createRenderer} from 'fela-native'
// import Routes from './js/core/Routes'
// import store from './js/redux/store'
//
// const renderer = createRenderer()
//
// export default () => (
//   <FelaProvider renderer={renderer}>
//     <ReduxProvider store={store}>
//       <Routes/>
//     </ReduxProvider>
//   </FelaProvider>
// )

import React from 'react'
import {RendererProvider} from 'react-fela'
import {createRenderer} from 'fela-native'
import App from "./js/screen/FelaDemo";

const render = createRenderer()

export default () => (
  <RendererProvider renderer={render}>
    <App/>
  </RendererProvider>
)