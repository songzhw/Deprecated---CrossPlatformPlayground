import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { FirstScreen } from "./screen/first/FirstScreen";
import { configureStore, IAppState } from "./core/store";
import { Store } from "redux";
import { Provider } from "react-redux";

interface IProps {
  store: Store<IAppState>
}

const Routers = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/first" component={FirstScreen}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const store = configureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers/>
      </Provider>
    </div>
  );
};

export default App;
