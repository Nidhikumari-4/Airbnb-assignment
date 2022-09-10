import React from "react";
import { useEffect, useState } from "react";
import "./Cards.css";

const Cards = () => {
  const [fake, setfake] = useState([]);
  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setfake(jsonData);
  };

  return (
    <>
      <div className="Cards">
        {fake.map((values) => {
          return (
            <>
              <div className="Cards_container">
                <div>
                  <img src={values.image} alt="img"></img>
                </div>
                <div className="contents">
                  <p className="title">{values.title}</p>
                  <p className="price">{values.price}</p>
                  <p className="category">{values.category}</p>
                  <p className="rate">{values.rating.rate}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
