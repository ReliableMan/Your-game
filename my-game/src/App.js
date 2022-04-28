import "./App.css";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import MainPage from "./components/MainPage/MainPage";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/auth" element={<Login/>} />
        <Route path="/" element={<MainPage/>} />
        <Route path="/endGame" element={<Leaderboard/>} />
      </Routes>
    </>
  );
}

export default App;
