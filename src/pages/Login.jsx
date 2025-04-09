import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import profile from "/images/profile.png";
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

   const [formData, setFormData] = useState({
      phone_number: "",
      password: "",
   });

   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user); // Set true if user exists, false otherwise
   }, []);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // const response = await axios.post("http://localhost:5000/login", formData);
         toast.success("Login Successful");
         localStorage.setItem(
            "user",
            JSON.stringify({ phone_number: formData.phone_number })
         );
         setIsLoggedIn(true);
         navigate("/");
      } catch (error) {
         console.log(
            error.response?.data?.message ||
               "Invalid credentials, please try again."
        );
        toast.error("Invalid credentials, please try again.");
      }
   };

   return (
      <div className="login-container">
       <form className="login-form" onSubmit={handleSubmit}>
         <img className="profile-image" src={profile} alt="default image"/>
            <h2>Login</h2>

            <div className="input-group">
               <label>Phone Number</label>
               <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
               />
            </div>

            <div className="input-group">
               <label>Password</label>
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
               />
            </div>

            <button type="submit" className="login-btn">
               Login
            </button>

            <p className="register-link">
               Don't have an account? <Link to="/register">Register here</Link>
            </p>
         </form>
      </div>
   );
};

export default Login;
