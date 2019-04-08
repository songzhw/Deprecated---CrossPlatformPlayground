import React from "react";
import iconBack from './icon_back.png'
import { Link } from "react-router-dom";

export const Header: React.FunctionComponent = () => {
  return (
    <header style={{backgroundColor: 'blue'}}>
      <img src={iconBack} alt="back"/>
      <Link to="/movie"> Movies </Link>
      <Link to="/admin"> Admin </Link>
    </header>
  )
};