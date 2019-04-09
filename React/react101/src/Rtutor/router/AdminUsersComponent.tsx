import React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";
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
      <Route path="/admin/users/:id" component={AdminUserDetail}/>
    </div>
  );
};

const AdminUserDetail: React.FunctionComponent<RouteComponentProps<{ id: string }>> = (props) => {
  let user: IUser;
  if (props.match.params.id) {
    const id: number = parseInt(props.match.params.id, 10);
    user = userList.filter(u => u.id === id)[0];
  } else {
    return null;
  }
  console.log(user)

  return (
    <div>
      <p> {user.name} </p>
      <p> isAdmin = {user.isAdmin ? "yes" : "no"}</p>
    </div>
  );
};
