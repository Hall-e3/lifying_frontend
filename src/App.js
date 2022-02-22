import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import useStyles from "./styles";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Auth/Login.user";
import Register from "./views/Auth/Register.user";
import Home from "./views/Home";
import ConfirmationCode from "./views/Auth/confirmation.user";
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/register" element={<Register />} />
        <Route exact path="/auth/confirm" element={<ConfirmationCode />} />
      </Routes>
    </div>
  );
};

export default App;
