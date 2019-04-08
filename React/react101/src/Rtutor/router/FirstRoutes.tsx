import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { AdminScreen } from "./AdminScreen";
import { MovieListScreen } from "./MovieListScreen";
import { MovieScreen } from "./MovieScreen";
import { NotFoundScreen } from "./NotFoundScreen";
import { LoginScreen } from "./LoginScreen";

export const FirstRoutes: React.FunctionComponent = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Redirect exact={true} from="/" to="/admin"/>
          <Route path="/admin">
            {isLoggedIn ? <AdminScreen/> : <LoginScreen/>}
          </Route>
          <Route exact={true} path="/movie" component={MovieListScreen}/>
          <Route path="/movie/:id" component={MovieScreen}/>
          <Route component={NotFoundScreen}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

/*
1. exact :
    原因是因为"movie/2"其实是match了上面的两个path. 是的, 都match了. 所以两个组件都刷新出来了.
    可见"movie"其实相当于"movie/*"
2.
 */
