import React from "react";
import { TodoScreen } from "./todo/TodoScreen";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { IAppState, TodoReducer } from "./todo/TodoReducer";

const store: Store<IAppState> = createStore(TodoReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoScreen/>
    </Provider>
  );
};

export default App;
