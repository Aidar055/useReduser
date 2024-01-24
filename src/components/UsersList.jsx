import React, { useContext, useEffect } from "react";
import { todoContext } from "../context/TodoContexetProvider";
import Users from "./Users";

const UsersList = () => {
  const { getUsers, getOneUser, users } = useContext(todoContext);
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    // getOneUser();
  }, []);
  return (
    <div className="card">
      {users.map((elem) => (
        <Users {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default UsersList;
