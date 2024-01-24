import React from "react";
import { NavLink } from "react-router-dom";
import home from "../img/home.png";
import users from "../img/icons8-(1).png";
const Navbar = () => {
  return (
    <div className="users">
      <NavLink to={"/"}>
        <img src={home} alt="" />
      </NavLink>
      <NavLink to={"/users"}>
        <img src={users} alt="" />
      </NavLink>
    </div>
  );
};

export default Navbar;
