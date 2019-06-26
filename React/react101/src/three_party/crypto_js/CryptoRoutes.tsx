import React, { useState } from "react";
import { BrowserRouter, NavLink, Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import "./Crypto.css";
import { Base64Screen } from "./Base64Screen";
import { CryptoScreen } from "./CryptoScreen";
import { JwtScreen } from "./JwtScreen";
import { AesScreen } from "./AesScreen";
import { CrossScreen } from "./CrossScreen";
import { AdrmsScreen } from "../../biz/adrm/AdrmsScreen";
import { AesOutputScreen } from "./AesOutputScreen";
import { EncryptFileScreen } from "./EncryptFileScreen";
import { BdrmsScreen } from "../../biz/adrm/BdrmScreen";
import { CdrmsScreen } from "../../biz/adrm/CdrmScreen";

const Header = () => {
  return (
    <div className={"header"}>
      <NavLink to="/base64" className="headerLink" activeClassName="activeHeaderLink"> Base64 </NavLink>
      <NavLink to="/jwt" className="headerLink" activeClassName="activeHeaderLink"> jwt </NavLink>
      <NavLink to="/aes" className="headerLink" activeClassName="activeHeaderLink"> AES </NavLink>
      <NavLink to="/aes2" className="headerLink" activeClassName="activeHeaderLink"> AES Output</NavLink>
      <NavLink to="/cross" className="headerLink" activeClassName="activeHeaderLink"> Cross-Platform </NavLink>
      <NavLink to="/file" className="headerLink" activeClassName="activeHeaderLink"> en/de_file </NavLink>
      <NavLink to="/decryptf" className="headerLink" activeClassName="activeHeaderLink"> ADRMS </NavLink>
      <NavLink to="/decrypt2" className="headerLink" activeClassName="activeHeaderLink"> SjDRMB </NavLink>
      <NavLink to="/decrypt3" className="headerLink" activeClassName="activeHeaderLink"> RtmDRMB </NavLink>
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
        <Route path="/aes2" component={AesOutputScreen}/>
        <Route path="/file" component={EncryptFileScreen}/>
        <Route path="/cross" component={CrossScreen}/>
        <Route path="/decryptf" component={AdrmsScreen}/>
        <Route path="/decrypt2" component={BdrmsScreen}/>
        <Route path="/decrypt3" component={CdrmsScreen}/>
      </Switch>
    </BrowserRouter>
  );
};

