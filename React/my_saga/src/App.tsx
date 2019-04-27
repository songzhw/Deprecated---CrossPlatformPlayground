import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { FirstScreen } from "./screen/first/FirstScreen";

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


const App: React.FC = () => {
  return (
    <div className="App">
      <Routers/>
    </div>
  );
};

export default App;
