import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API, API2 } from "../helpers/const";

import { useParams } from "react-router-dom";
export const todoContext = createContext();
const TodoContexetProvider = ({ children }) => {
  const { id } = useParams();
  // ? 1) создать INT_STATE в котормо будут лежать начальное состояние
  // ? 2) Создать функцию reducer в котормо происываееться switch конструкция на проверку type
  // ? 3) вызвать хук useReducer(reduser, INIT_STATE) возвращает [state, dispatch]

  const INIT_STATE = {
    users: [],
    user: {},
    post: [],
    posts: {},
  };
  const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_USERS":
        return { ...state, users: action.payload };

      case "GET_ONE_USER":
        return { ...state, user: action.payload };
      case "GET_POST":
        return { ...state, post: action.payload };
      case "GET_ID":
        return { ...state, posts: action.payload };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reduser, INIT_STATE);

  const getUsers = async () => {
    const { data } = await axios(`${API}/users`);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };
  const getPost = async () => {
    const { data } = await axios(`${API2}`);
    dispatch({
      type: "GET_POST",
      payload: data,
    });
  };

  const getId = async (id) => {
    const { data } = await axios(`${API2}/?=userId${id}`);
    dispatch({
      type: "GET_ID",
      payload: data,
    });
  };

  const values = {
    users: state.users,
    user: state.user,
    post: state.post,
    postId: state.posts,
    getUsers,
    getPost,
    getId,
  };
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};

export default TodoContexetProvider;
