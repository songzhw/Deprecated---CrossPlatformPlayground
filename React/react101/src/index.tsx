import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SlowListReducer } from "./performance/slow_list/SlowListReducer";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import SlowListClass from "./performance/slow_list/SlowListClass";

// @ts-ignore
const store: Store = createStore(SlowListReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SlowListClass/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

