import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Matt Denune",
      image:
        "https://i1.wp.com/melmagazine.com/wp-content/uploads/2021/01/Gigachad.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
