import React from "react";
import "./Home.css"
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

const Home = () => {
   return (
      <>
         <Slider />
         <div className="home-container">
            <Categories />
            <Featured />
         </div>
      </>
   );
};

export default Home;
