import React from "react";
import MapMenuItems from "../../functional/mapMenuItems/mapMenuItems";
import "./home.scss";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__top-nav-container"> Top Nav </div>
      <div className="home__menu-container">
        <div className="home__left-nav-container">
          Menu
          <MapMenuItems />
        </div>
        <div className="home__content-container">content!</div>
      </div>
      <div className="home__footer-container"> Footer </div>
    </div>
  );
};

export default Home;
