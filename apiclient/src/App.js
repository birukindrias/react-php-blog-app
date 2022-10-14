import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/auth/login';
import Reg from "./components/auth/reg";
import Home from './components/user/home';
import Header from './components/items/Header';
import Main from './components/main';
import Blogs from "./components/blogs/Blogs";
import Profile from "./components/user/Profile";

function App() {
  let user = useSelector((state) => state.user_slice.user);
  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path)
  }

  return (
    <>
      {user ?
        <Header /> : 
        <p onClick={() => {
          redirect('/reg')
        }
        }>reg</p>}
     

      <Routes>

        {/* <Route exact path="/">
          {user ? <Navigate to="/Main" /> : <Navigate to="/reg" />}
        </Route> */}

        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
      </Routes>
    </>
  );
}

export default App;
