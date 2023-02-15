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
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user._json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/top" element={<Top />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewBlog />} />
          <Route path="/userinfo" element={<UserInfo />} />
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
