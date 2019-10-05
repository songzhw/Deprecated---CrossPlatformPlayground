import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore, Store, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { waitAnotherActionSaga } from "./three_party/saga/wait/SagaWait";

import { SlowListReducer } from "./performance/slow_list/SlowListReducer";
import SlowListScreen from "./performance/slow_list/SlowListScreen";
import SlowListClass from "./performance/slow_list/SlowListClass";
import { BetterListReducer } from "./performance/better_list/BetterListReducer";
import BetterListScreen from "./performance/better_list/BetterListScreen";
import { CountDownReducerScreen } from "./Rtutor/hooks/closure/CountDownReducerScreen";
import { IntervalPitfallFix2 } from "./Rtutor/hooks/useState/IntervalPitfallFix2";
import { CountPitfall } from "./Rtutor/hooks/useeffect/CountPitfall";
import { MyStateScreen2 } from "./Rtutor/hooks/my_hooks/MyStateScreen2";
import SagaWaitScreen from "./three_party/saga/wait/SagaWaitScreen";
import { SagaWaitReducer } from "./three_party/saga/wait/SagaWaitReducer";
import { SagaCallDemo } from "./three_party/saga/call/SagaCallDemo";
import { sagaCallReturnValue } from "./three_party/saga/call/SagaCallReturnValue";

import SagaChannelAsyncDemo from "./three_party/saga/channel_async/SagaChannelAsyncDemo";
import { ChannelAsync_Saga } from "./three_party/saga/channel_async/ChannelAsync_Saga";


const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(SagaWaitReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(ChannelAsync_Saga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SagaChannelAsyncDemo/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

