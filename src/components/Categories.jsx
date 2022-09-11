import React from "react";
import { useEffect, useState } from "react";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GiDoubleNecklace } from "react-icons/gi";
import { IoMdShirt } from "react-icons/io";
import { GiAmpleDress } from "react-icons/gi";
import "./Categories.css";

const Categories = () => {
  const [category, setcategory] = useState([]);

  useEffect(() => {
    categoryStore();
  }, []);

  const categoryStore = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const jsonData = await response.json();
    setcategory(jsonData);
  };

  return (
    <div className="Categories">
      <div className="Categories_container">
        <div className="icons">
          <div>
            <MdOutlineElectricalServices />
          </div>
          <div>
            <GiDoubleNecklace />
          </div>
          <div className="shirt">
            <IoMdShirt />
          </div>
          <div className="dress">
            <GiAmpleDress />
          </div>
        </div>
        {category.map((values) => {
          return (
            <div className="Heading" key={values}>
              <div>{values}</div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Categories;
