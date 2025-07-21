import { useParams } from "@tanstack/react-router";
import React from "react";

const UserProfile = () => {
  const { id } = useParams({ from: "/profile/$id" });

  return (
    <div>
      <h1>👤 User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserProfile;
