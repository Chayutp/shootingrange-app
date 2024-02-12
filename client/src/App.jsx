import "./App.css";
import Rent from "../page/rent";
import Home from "../page/home";
import Login from "../page/login";
import Register from "../page/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Rent" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
