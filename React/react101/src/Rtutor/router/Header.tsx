import React from "react";
import iconBack from './icon_back.png'
import { Link } from "react-router-dom";
import './Header.css'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="header">
      <img src={iconBack} alt="back" className="imgBack"/>
      <Link to="/movie" className="headerLink"> Movies </Link>
      <Link to="/admin" className="headerLink"> Admin </Link>
    </header>
  )
};