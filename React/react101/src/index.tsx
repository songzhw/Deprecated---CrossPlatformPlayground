import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { SlowListReducer } from "./performance/slow_list/SlowListReducer";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import SlowListClass from "./performance/slow_list/SlowListClass";
import { BetterListReducer } from "./performance/better_list/BetterListReducer";

const store: Store = createStore(BetterListReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SlowListClass/>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));

