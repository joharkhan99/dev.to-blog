import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Latest from "./Pages/Latest";
import Home from "./Pages/Home";
import Top from "./Pages/Top";
import Blog from "./Pages/Blog";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import NewBlog from "./Pages/NewBlog";
import UserInfo from "./Pages/UserInfo";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import "./index.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Tag from "./Pages/Tag";
import EditBlog from "./Pages/EditBlog";
import Admin from "./Pages/Admin";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/api/auth/login/success`;
      const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/top" element={<Top />} />
            <Route path="/tag/:tag" element={<Tag />} />
            <Route path="/:username/:title" element={<Blog />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/new"
              element={
                user === null || user === undefined ? (
                  <Navigate to="/" />
                ) : (
                  <NewBlog />
                )
              }
            />
            <Route
              path="/edit/:postid"
              element={
                user === null || user === undefined ? (
                  <Navigate to="/" />
                ) : (
                  <EditBlog />
                )
              }
            />
            <Route
              path="/userinfo"
              element={
                user === null || user === undefined ? (
                  <Navigate to="/" />
                ) : (
                  <UserInfo />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                user === null || user === undefined ? (
                  <Navigate to="/" />
                ) : (
                  <Dashboard />
                )
              }
            />
            <Route
              path="/admin"
              element={
                user === null || user === undefined || user.role === "" ? (
                  <Navigate to="/" />
                ) : (
                  <Admin />
                )
              }
            />
            <Route path="/:username" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
