import { BrowserRouter, Route, Routes } from "react-router-dom";
import Latest from "./Pages/Latest";
import Home from "./Pages/Home";
import Top from "./Pages/Top";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/top" element={<Top />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
