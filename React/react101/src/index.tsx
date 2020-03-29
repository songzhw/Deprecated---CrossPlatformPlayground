import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { applyMiddleware, createStore, Store } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { C01Basic } from "./three_party/material_ui/C01Basic";
import { SagaWaitReducer } from "./three_party/saga/wait/SagaWaitReducer";
import { ChannelAsync_Saga } from "./three_party/saga/channel_async/ChannelAsync_Saga";
import { ModuleA } from "./biz/singleton/export/ModuleA";
import { ModuleD } from "./biz/singleton/exportdefault/ModuleD";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(SagaWaitReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ChannelAsync_Saga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <C01Basic/>
    </Provider>
  )
    ;
};

ReactDOM.render(<App/>, document.getElementById("root"));

