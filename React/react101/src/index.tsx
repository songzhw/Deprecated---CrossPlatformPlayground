import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { SagaWaitReducer } from "./three_party/saga/wait/SagaWaitReducer";
import { ChannelAsync_Saga } from "./three_party/saga/channel_async/ChannelAsync_Saga";
import { ModuleA } from "./biz/singleton/export/ModuleA";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(SagaWaitReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ChannelAsync_Saga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ModuleA/>
    </Provider>
  )
    ;
};

ReactDOM.render(<App/>, document.getElementById("root"));

