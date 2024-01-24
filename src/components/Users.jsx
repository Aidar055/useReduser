import React, { useContext, useEffect } from "react";
import UsersList from "./UsersList";
import { Button } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
const Users = ({ name, username, email, id }) => {
  return (
    <div className="item2">
      <div className="item">
        <h4> {name}</h4>
        <p>
          <span>NicName:</span>
          {username}
        </p>
        <p>
          <span>Email:</span> {email}
        </p>
        <NavLink to={`/post/${id}`}>
          <Button>Post</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Users;
