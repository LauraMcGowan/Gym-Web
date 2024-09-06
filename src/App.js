import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import MeetTheTeam from "./pages/meetTheTeam";
import Memberships from "./pages/memberships";
import Shop from "./pages/shop";
import JaminDanceAcademy from "./pages/jaminDanceAcademy";
import SignUp from "./pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {}
          <Route path="/" element={<Home />} />
          <Route path="/" element={<MeetTheTeam />} />
          <Route path="/" element={<Memberships />} />
          <Route path="/" element={<Shop />} />
          <Route path="/" element={<JaminDanceAcademy />} />
          <Route path="/" element={<SignUp />} />
          {}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
