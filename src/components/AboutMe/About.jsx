import React from "react";
import Carousel from "../CarouselFlod/carousel";
import { carouselData } from "../CarouselFlod/carouselData";
import "./about-us.css";

const About = () => {
  return (
    <>
      {/* <Carousel slides={carouselData} />; */}
      <div className="about-us">
        <h2> About us: </h2>
        <h3 className="tagline">Makes Journey Awesome!</h3>
        <h5>
          We’re more than just a car rental company. We’re your travel partner.
        </h5>
        <p>
          At ResearchZeal, we believe that renting a car should be more than
          just a means of transportation. It should be an opportunity to
          discover new places, experience new cultures, and create unforgettable
          memories. That’s why we offer affordable and reliable car rental
          services for travelers who want to explore new places and have fun. We
          have a wide range of vehicles to suit every taste and budget, from
          compact cars to luxury SUVs. We also provide free roadside assistance,
          unlimited mileage, and flexible cancellation policies.
          <span>
            Our mission is to make car rental easy and enjoyable for everyone.
          </span>
        </p>
        <h3> Our story: </h3>
        <p>
          Our company was founded in 2023 by two friends who shared a passion
          for travel and adventure. They realized that there was a gap in the
          market for a car rental company that offered more than just
          transportation, but also personalized service, convenience, and value.
          They started with a small fleet of cars and a simple website. Today,
          we have hundreds of satisfied customers who trust us with their travel
          needs. We are proud of our achievements, but we never stop learning
          and improving. We always strive to provide the best quality service,
          the latest technology, and the most competitive prices.
        </p>
        <h3>Our team: </h3>
        <p>
          Meet our team of car rental experts. They are friendly, professional,
          and knowledgeable, and they are always ready to help you find the
          perfect car for your trip. They have years of experience in the car
          rental industry, and they are passionate about travel and customer
          service. They love to share their tips and recommendations on the best
          places to visit and things to do in our destinations.
          <span>
            They are more than just employees, they are part of our family.
          </span>
        </p>
      </div>
    </>
  );
};

export default About;
