import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import logo from "/images/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const cartItemsCount = useSelector((state) => state.cart.cartItems.length);
   const navigate = useNavigate();

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(user)
         setIsLoggedIn(true); 
   },);

   
   const handleLogout = () => {
      localStorage.removeItem("user"); 
      setIsLoggedIn(false);
      navigate("/login"); 
   };

   return (
      <>
         <nav>
            <img className="logo" src={logo} alt="logo" />
            <div></div>
            <div className="right">
               <ul className="nav-items">
                  <li>
                     <NavLink
                        className="nav-item"
                        style={({ isActive }) => ({
                           color: isActive ? "red" : "black",
                        })}
                        to="/"
                     >
                        Home
                     </NavLink>
                  </li>

                  <li>
                     <NavLink
                        className="nav-item"
                        style={({ isActive }) => ({
                           color: isActive ? "red" : "black",
                        })}
                        to="/menu"
                     >
                        Menu
                     </NavLink>
                  </li>
               </ul>

               <div className="buttons">
                  {isLoggedIn ? (
                     <button onClick={handleLogout} className="logout">
                        Logout
                     </button>
                  ) : (
                     <Link to="/login">
                        <button className="login">Login</button>
                     </Link>
                  )}

                  <Link to="/cart" className="cart-icon">
                     <button className="cart">
                        <FaCartPlus />
                     </button>
                     {cartItemsCount > 0 && (
                        <span className="cart-badge">{cartItemsCount}</span>
                     )}
                  </Link>
               </div>
            </div>
         </nav>
      </>
   );
};

export default Navbar;
