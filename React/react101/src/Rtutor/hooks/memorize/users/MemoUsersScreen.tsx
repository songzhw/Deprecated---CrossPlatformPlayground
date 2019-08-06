import React, { useEffect, useState } from "react";


export const MemoUsersScreen = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const fetchUser = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/10`
    );
    const newUser = await res.json();
    setUser(newUser);
  };

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <div>
      <User name={user.name} email={user.email}/>
    </div>
  );
};

interface IProps {
  name: string;
  email: string;
}

const User = (props: IProps) => {
  return (
    <p>{props.name} -- {props.email}</p>
  );
};
