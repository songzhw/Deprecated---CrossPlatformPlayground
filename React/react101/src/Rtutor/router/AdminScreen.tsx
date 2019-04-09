import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./AdminScreen.css";
import { AdminUsersComponent } from "./AdminUsersComponent";

export const AdminScreen = () => {

  return (
    <div>
      <h3> Admin Panel </h3>

      <ul className="admin-sections">
        <li key="users">
          <NavLink to={"/admin/users"} activeClassName="admin-link-active"> Users </NavLink>
        </li>
        <li key="movies">
          <NavLink to={"/admin/movies"} activeClassName="admin-link-active"> Movies </NavLink>
        </li>
      </ul>

      <Route path="/admin/users" component={AdminUsersComponent}/>
      <Route path="/admin/movies" component={AdminMoviesComponent}/>
    </div>
  );
};



const AdminMoviesComponent = () => {
  return (<div>Admin movies</div>);
};
