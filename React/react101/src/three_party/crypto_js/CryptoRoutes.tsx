import React from "react";
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./Crypto.css";
import { Base64Screen } from "./Base64Screen";
import { CryptoScreen } from "./CryptoScreen";
import { JwtScreen } from "./JwtScreen";
import { AesScreen } from "./AesScreen";
import { AesOutputScreen } from "./AesOutputScreen";

const Header = () => {
  return (
    <div className={"header"}>
      <NavLink to="/base64" className="headerLink" activeClassName="activeHeaderLink"> Base64 </NavLink>
      <NavLink to="/jwt" className="headerLink" activeClassName="activeHeaderLink"> jwt </NavLink>
      <NavLink to="/aes" className="headerLink" activeClassName="activeHeaderLink"> AES </NavLink>
      <NavLink to="/aes2" className="headerLink" activeClassName="activeHeaderLink"> AES Output</NavLink>
    </div>
  );
};

export const CryptoRouter = () => {
  // "<Redirect exact={true}" , exact让我们在from时只match"/", 而不是"/movies", "/admin"也被匹配到了
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Redirect exact={true} from="/" to="/all"/>
        <Route path="/all" component={CryptoScreen}/>
        <Route path="/base64" component={Base64Screen}/>
        <Route path="/jwt" component={JwtScreen}/>
        <Route path="/aes" component={AesScreen}/>
        <Route path="/aes2" component={AesOutputScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

/*
Conditional Router
  <Route path="/admin">
    {isLoggedIn ? <AdminScreen/> : <LoginScreen/>}
  </Route>
 */
