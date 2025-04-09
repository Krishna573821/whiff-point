import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
   const categories = [
      { name: "Indian", image: "/images/categories/indian.jpg", id: "indian" },
      {
         name: "Chinese",
         image: "/images/categories/chinese.jpg",
         id: "chinese",
      },
      {
         name: "Tandoori",
         image: "/images/categories/tandoori.jpg",
         id: "tandoori",
      },
      {
         name: "Noodles",
         image: "/images/categories/noodles.jpeg",
         id: "noodles",
      },
      { name: "Rolls", image: "/images/categories/roll.jpg", id: "rolls" },
   ];

   return (
      <div className="categories">
         <h3>Categories</h3>
         <div className="category-list">
            {categories.map((category, index) => (
               <Link
                  key={index}
                  to={`/menu#${category.id}`}
                  className="category"
               >
                  <div className="category-image">
                     <img src={category.image} alt={category.name} />
                  </div>
                  <div className="category-name">{category.name}</div>
               </Link>
            ))}
         </div>
      </div>
   );
};

export default Categories;
