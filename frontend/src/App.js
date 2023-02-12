import { BrowserRouter, Route, Routes } from "react-router-dom";
import Latest from "./Pages/Latest";
import Home from "./Pages/Home";
import Top from "./Pages/Top";
import Blog from "./Pages/Blog";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import NewBlog from "./Pages/NewBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/top" element={<Top />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
