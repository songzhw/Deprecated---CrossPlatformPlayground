import React from "react";
import { TodoScreen } from "./todo/TodoScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { TodoReducer } from "./todo/TodoReducer";

const store = createStore(TodoReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TodoScreen/>
    </Provider>
  );
};

export default App;
