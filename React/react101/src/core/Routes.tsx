import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "../Rtutor/router/Header";
import { AdminScreen } from "../Rtutor/router/AdminScreen";
import { MovieListScreen } from "../Rtutor/router/MovieListScreen";
import { MovieScreen } from "../Rtutor/router/MovieScreen";
import { NotFoundScreen } from "../Rtutor/router/NotFoundScreen";

export const Routes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Redirect  from="/" to="/admin"/>
          <Route exact={true} path="/movie" component={MovieListScreen}/>
          <Route path="/admin" component={AdminScreen}/>
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
