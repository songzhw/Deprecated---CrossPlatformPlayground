import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, RouteComponentProps, Router, Switch } from "react-router-dom";
import { Header } from "./Header";
import { MovieListScreen } from "./MovieListScreen";
import { MovieScreen } from "./MovieScreen";
import { CountScreen } from "./CountScreen";
import { NotFoundScreen } from "./NotFoundScreen";
import { LoginScreen } from "./LoginScreen";
import { AdminScreen } from "./AdminScreen";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./RouterForFirst.css";
import { DownloadImage } from "../network_zip/DownloadImage";

export const RoutesForFirst: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header/>
      <TransitionGroup>
        <CSSTransition timeout={500} key={props.location.key} classNames="animated">
          <Switch>
            <Redirect exact={true} from="/" to="/admin"/>
            <Route path="/count">
              {isLoggedIn ? <CountScreen/> : <LoginScreen/>}
            </Route>
            <Route path="/admin" component={AdminScreen}/>
            <Route exact={true} path="/movie" component={MovieListScreen}/>
            <Route path="/movie/:id" component={MovieScreen}/>
            <Route component={NotFoundScreen}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export const RouterWrap: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Route component={RoutesForFirst}/>
    </BrowserRouter>
  );
};

/*
1. exact :
    原因是因为"movie/2"其实是match了上面的两个path. 是的, 都match了. 所以两个组件都刷新出来了.
    可见"movie"其实相当于"movie/*"
2.
 */
