import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./AdminScreen.css";

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

const userList: IUser[] = [
  { id: 1, name: "Jim", isAdmin: true },
  { id: 2, name: "Lily", isAdmin: false },
  { id: 3, name: "Lucy", isAdmin: true }
];

export const AdminUsersComponent: React.FunctionComponent = () => {
  return (
    <div>
      <ul className="admin-sections">
        {userList.map(user => (
          <li key={user.id}>
            <NavLink to={`/admin/users/${user.id}`} activeClassName="admin-link-active"> {user.name} </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

