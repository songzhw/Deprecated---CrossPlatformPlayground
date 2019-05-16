import React, { useState } from "react";
import { BrowserRouter, NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import "./Crypto.css";
import { Base64Screen } from "./Base64Screen";
import { CryptoScreen } from "./CryptoScreen";

const Header = () => {
  return (
    <div className={"header"}>
      <NavLink to="/base64" className="headerLink" activeClassName="activeHeaderLink"> Base64 </NavLink>
      <NavLink to="/sha256" className="headerLink" activeClassName="activeHeaderLink"> sha256 </NavLink>
      <NavLink to="/AES_no" className="headerLink" activeClassName="activeHeaderLink"> AES_No </NavLink>
      <NavLink to="/AES_pkcs7" className="headerLink" activeClassName="activeHeaderLink"> AES_PKCS7 </NavLink>
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
      </Switch>
    </BrowserRouter>
  );
};

