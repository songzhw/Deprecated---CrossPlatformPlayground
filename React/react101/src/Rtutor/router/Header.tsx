import React, { useEffect, useState } from "react";
import iconBack from "./icon_back.png";
import { Link, NavLink, Prompt, RouteComponentProps, withRouter } from "react-router-dom";
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
      <Prompt when={searchKeyword.length < 4 && searchKeyword.length > 0} message="Are you sure to leave? (msg < 4)"/>
      <img src={iconBack} alt="back" className="imgBack"/>
      <NavLink to="/movie" className="headerLink" activeClassName="activeHeaderLink"> Movies </NavLink>
      <NavLink to="/count" className="headerLink" activeClassName="activeHeaderLink"> Count </NavLink>

      <div className="search-container">
        <input type="search" placeholder="search" value={searchKeyword}
               onChange={onChange} onKeyDown={onKeyDown}/>
      </div>
    </header>
  );
};

// 从url中取出数据, 如"/books?id=23", 就得用props.location.search, 即得用RouteComponentProps
// 但在RoutesForFirst中, <Header>并没有被<Route>给包裹, 所以要加这个withRouter()来有上面的props
export const Header = withRouter(HeaderComponent);
