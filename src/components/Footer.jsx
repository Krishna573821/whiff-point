import React from "react";
import "./Footer.css";
import logo from "/images/logo.png";
import {
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaGithub
} from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-top">
            <div className="footer-logo-section">
               <img src={logo} alt="Whiff Point Logo" className="footer-logo" />
               <h2>Get the latest news!</h2>
               <p>
               Craving something new? Be the first to know about our special offers and tasty additions!
               </p>
            </div>

            <div className="newsletter">
               <h3>Subscribe to Our Newsletter</h3>
               <input type="email" placeholder="Enter your email address" />
               <button>Subscribe</button>
            </div>
         </div>

        
            <div className="footer-links">
               {/* <div className="footer-column">
                  <h4>Services</h4>
                  <ul>
                     <li>1on1 Coaching</li>
                     <li>Company Review</li>
                     <li>Accounts Review</li>
                     <li>HR Consulting</li>
                     <li>SEO Optimization</li>
                  </ul>
               </div> */}

               <div className="footer-column">
                  <h4>Company</h4>
                  <ul>
                     <li>About</li>
                     <li>Meet the Team</li>
                     <li>Accounts Review</li>
                  </ul>
               </div>

               <div className="footer-column">
                  <h4>Helpful Links</h4>
                  <ul>
                     <li>Contact</li>
                     <li>FAQs</li>
                     <li>Live Chat</li>
                  </ul>
               </div>

               <div className="footer-column">
                  <h4>Legal</h4>
                  <ul>
                     <li>Accessibility</li>
                     <li>Returns Policy</li>
                     <li>Refund Policy</li>
                     <li>Hiring Statistics</li>
                  </ul>
               </div>

               {/* <div className="footer-column">
                  <h4>Downloads</h4>
                  <ul>
                     <li>Marketing Calendar</li>
                     <li>SEO Infographics</li>
                  </ul>
               </div> */}
            </div>
         
         <div className="footer-social">
            <a href="#">
               <FaFacebookF />
            </a>
            <a href="#">
               <FaInstagram />
            </a>
            <a href="#">
               <FaTwitter />
            </a>
            <a href="#">
               <FaGithub />
            </a>
            
         </div>
      </footer>
   );
};

export default Footer;
