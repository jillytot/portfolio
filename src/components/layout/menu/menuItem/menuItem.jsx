import React from "react";
import "./menuItem.scss";

const MenuItem = ({ name, link, image }) => {
  return (
    <div className="menuItem__outer-container">
      <button className="menuItem__button" onClick={() => console.log(link)}>
        {image ? <img src={image} alt={name} /> : name}
      </button>
      {name || "item"}
    </div>
  );
};
export default MenuItem;
