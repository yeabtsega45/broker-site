import React from "react";
import "./Property.css";
// import ImageSlider from "./ImageSlider";

function Property({ image, type, location, area, rooms, price }) {
  return (
    <div className="property">
      {/* <ImageSlider={ImS} /> */}
      <img src={image} className="images" alt="house" />
      <p>{type}</p>
      <p>{location}</p>
      <p>{area}</p>
      <p>{rooms}</p>
      <p>{price}</p>
    </div>
  );
}

export default Property;
