import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { signInWithPopup,signOut } from "firebase/auth";
import logo from "../assets/logo.png";
import { auth,provider } from './../firebase/config';

const Header = () => {
    const [isAuth,setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

    function handleLogin()
    {
      signInWithPopup(auth,provider).then((result)=>{
        setIsAuth(true);
        localStorage.setItem("isAuth",true);
        console.log(result);
      })
    }

    function handleLogOut()
    {
      setIsAuth(false);
      signOut(auth); 
      localStorage.setItem("isAuth",false);
    }


  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo Arpon" />
        <span>ARPON</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {isAuth ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogOut} className="auth">
              <i className="bi bi-box-arrow-right"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login 
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
