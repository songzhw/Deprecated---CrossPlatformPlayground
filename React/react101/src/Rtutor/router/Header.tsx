import React, { useEffect, useState } from "react";
import iconBack from "./icon_back.png";
import { Link, NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import "./Header.css";

const HeaderComponent: React.FunctionComponent<RouteComponentProps> = (props) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    setSearchKeyword(params.get("search") || "");
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.currentTarget.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.history.push(`/movie?search=${searchKeyword}`);
    }
  };

  return (
    <header className="header">
      <img src={iconBack} alt="back" className="imgBack"/>
      <NavLink to="/movie" className="headerLink" activeClassName="activeHeaderLink"> Movies </NavLink>
      <NavLink to="/admin" className="headerLink" activeClassName="activeHeaderLink"> Admin </NavLink>

      <div className="search-container">
        <input type="search" placeholder="search" value={searchKeyword}
               onChange={onChange} onKeyDown={onKeyDown}/>
      </div>
    </header>
  );
};

export const Header = withRouter(HeaderComponent);
