import React from "react";
import { Link } from "@tanstack/react-router";

const Users = () => {
  const users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
  ];

  return (
    <div>
      <h1>👤 Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.id}`}>{user.name}'s Profile</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
