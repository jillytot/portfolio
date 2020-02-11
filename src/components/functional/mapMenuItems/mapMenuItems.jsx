import React from "react";
import menuItems from "../../content/menuItems/menuItems";
import MenuItem from "../../layout/menu/menuItem/menuItem";

const MapMenuItems = () => {
  return menuItems.map((item, index) => {
    console.log("Map Menu Item: ", item, index);
    return (
      <MenuItem
        name={item.name}
        image={item.image}
        link={item.link}
        key={index}
      />
    );
  });
};

export default MapMenuItems;
