import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import profile from "/images/profile.png";
import { toast } from "react-toastify";


const Register = () => {
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone_number: "",
      password: "",
   });

   const [otp, setOtp] = useState("");
   const [showOtpField, setShowOtpField] = useState(false);

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // const response = await axios.post("http://localhost:5000/register", formData);
         console.log("OTP sent successfully");
         toast.success("OTP sent");
         setShowOtpField(true);
      } catch (error) {
         alert(error.response?.data?.message || "Something went wrong!");
      }
   };

   const handleOtpSubmit = async (e) => {
      e.preventDefault();
      try {
         // const response = await axios.post("http://localhost:5000/verify-otp", { email: formData.email,phone_number: formData.phone_number,otp: otp });
         console.log("OTP Verified Successfully");

         console.log(
            `Name: ${formData.name}, Email: ${formData.email}, Phone Number: ${formData.phone_number}`
         );
         localStorage.setItem(
            "user",
            JSON.stringify({
               email: formData.email,
               phone_number: formData.phone_number,
               otp: otp,
            })
         );
         toast.success("Registered Successfully");
         navigate("/");
      } catch (error) {
         alert(
            error.response?.data?.message || "Invalid OTP, please try again."
         );
      }
   };

   return (
      <div className="register-container">
         {!showOtpField ? (
            <form className="register-form" onSubmit={handleSubmit}>
               <img
                  className="profile-image"
                  src={profile}
                  alt="default image"
               />

               <h2>Register</h2>

               <div className="input-group">
                  <label>Name</label>
                  <input
                     type="text"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     placeholder="Enter your name"
                     required
                  />
               </div>

               <div className="input-group">
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder="Enter your email"
                     required
                  />
               </div>

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

               <button type="submit" className="register-btn">
                  Register
               </button>
            </form>
         ) : (
            <form className="register-form" onSubmit={handleOtpSubmit}>
               <h2>Enter OTP</h2>

               <div className="input-group">
                  <label>OTP</label>
                  <input
                     type="text"
                     value={otp}
                     onChange={(e) => setOtp(e.target.value)}
                     placeholder="Enter OTP"
                     required
                  />
               </div>

               <button type="submit" className="register-btn">
                  Verify OTP
               </button>
            </form>
         )}
      </div>
   );
};

export default Register;
