import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/first" className="header-link" activeClassName="header-link-active">Fetches</NavLink>
      </nav>
    </header>
  );
};