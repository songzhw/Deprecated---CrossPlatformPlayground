import React, { useState } from "react";
import { BrowserRouter, NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import "./Crypto.css";
import { Base64Screen } from "./Base64Screen";
import { CryptoScreen } from "./CryptoScreen";
import { JwtScreen } from "./JwtScreen";
import { AesScreen } from "./AesScreen";

const Header = () => {
  return (
    <div className={"header"}>
      <NavLink to="/base64" className="headerLink" activeClassName="activeHeaderLink"> Base64 </NavLink>
      <NavLink to="/jwt" className="headerLink" activeClassName="activeHeaderLink"> jwt </NavLink>
      <NavLink to="/aes" className="headerLink" activeClassName="activeHeaderLink"> AES </NavLink>
      <NavLink to="/file" className="headerLink" activeClassName="activeHeaderLink"> read_file </NavLink>
      <NavLink to="/decryptf" className="headerLink" activeClassName="activeHeaderLink"> decrypt_file </NavLink>
    </div>
  );
};

export const CryptoRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Redirect exact={true} from="/" to="/all"/>
        <Route path="/all" component={CryptoScreen}/>
        <Route path="/base64" component={Base64Screen}/>
        <Route path="/jwt" component={JwtScreen}/>
        <Route path="/aes" component={AesScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

