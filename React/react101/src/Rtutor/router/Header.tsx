import React from "react";
import iconBack from './icon_back.png'
import { Link, NavLink } from "react-router-dom";
import './Header.css'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <img src={iconBack} alt="back" className="imgBack"/>
      <NavLink to="/movie" className="headerLink" activeClassName="activeHeaderLink"> Movies </NavLink>
      <NavLink to="/admin" className="headerLink" activeClassName="activeHeaderLink"> Admin </NavLink>
    </header>
  )
};