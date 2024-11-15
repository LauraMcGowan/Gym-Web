import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/home";
import MeetTheTeam from "./pages/meetTheTeam";
import Memberships from "./pages/memberships";
import Shop from "./pages/shop";
import Classes from "./pages/classes";
import InjuryRehab from "./pages/injuryRehab";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/injury-rehab" element={<InjuryRehab />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
