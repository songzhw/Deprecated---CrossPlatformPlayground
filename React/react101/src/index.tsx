import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SlowListReducer } from "./performance/slow_list/SlowListReducer";
import SlowListScreen from "./performance/slow_list/SlowListScreen";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";

// @ts-ignore
const store: Store = createStore(SlowListReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SlowListScreen/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

