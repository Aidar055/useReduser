import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";

import UsersList from "../components/UsersList";

import PostList from "../components/PostList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/users" element={<UsersList />} />
      <Route path="/post/:id" element={<PostList />} />
    </Routes>
  );
};

export default MainRoutes;
