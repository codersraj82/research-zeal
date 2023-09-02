import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Carousel//
import Carousel from "../CarouselFlod/carousel";
import { carouselData } from "../CarouselFlod/carouselData";
//Cards//
import Cards from "../cards/cards";
import { cardData } from "../cards/cardData";
import { Link } from "react-router-dom";
import "../Home/Main.css";
import Navbar from "../navbar/Navbar";

function Home() {
  return (
    <>
      {/* <MainCarousel /> */}
      <div className="herosection">
        <div className="home-carousel">
          <Carousel slides={carouselData} />
        </div>
        <div className="right-section">
          <RightSide />
        </div>
      </div>
      <div className="card-container" id="hire-car">
        <Cards cardData={cardData} />
      </div>
    </>
  );
}

const RightSide = () => {
  return (
    <>
      <nav className="sidebar">
        <h2>Services</h2>
        <ul>
          <li>
            <Link to="/hire-car">HireCar</Link>
          </li>
          <li>
            <Link to="/hire-driver">HireDriver</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
