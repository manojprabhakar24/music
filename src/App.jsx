import { Route, Routes } from "react-router-dom";

import "./CSS/App.css";
import "./CSS/Sidebar.css";

import { Login } from "./Login";
import { Feed } from "./Feed";
import { Trend } from "./Trend";
import { Player } from "./Player";
import { Favourites } from "./Favourites";
import { Library } from "./Library";
import { Sidebar } from "./Sidebar";
import { Signup } from "./Signup";
import { ForgetPassword } from "./ForgetPassword";
import { VerifyOTP } from "./VerifyOTP";

import { loginEndpoint } from "./spotify";

function App() {
  return (
    <div className="main-body">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/trending" element={<Trend />} />
        <Route path="/" element={<Player />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/library" element={<Library />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/verifyreset" element={<VerifyOTP />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;

function Spotify() {
  return (
    <div>
      <a href={loginEndpoint}> click me</a>
    </div>
  );
}
