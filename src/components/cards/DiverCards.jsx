import React from "react";
import "./cards.css";
import "./driverData";
import { Link } from "react-router-dom";

const DriverCards = ({ driverData }) => {
  console.log(driverData);

  return (
    <>
      {driverData.map((card, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <img src={card.img} alt="" className="car-image" />
              <h5 className="card-title">{card.title}</h5>
              <div className="profile-container">
                <div className="profile-pic">
                  <img
                    src={card.profile}
                    alt=""
                    className="profile-photo"
                    loading="lazy"
                  />
                </div>
                <div className="Prof-conatiner">
                  <h6 className="profile-name">{card.name}</h6>
                  <p>{`
                Experience: ${card.experience} years
              `}</p>
                  <p className="habits">{`
                smoking: ${card.smoking} 
              `}</p>
                  <p className="habits">{`
                Panmasala: ${card.panmasala}
              `}</p>
                </div>
              </div>
              <div className="description-body">
                <p className="card-description">{card.description}</p>
              </div>
            </div>
            <div className="button-container">
              <div className="whatsapp-container">
                <a href="https://wa.me/+919423857070">
                  <img
                    src="../../images/whatsapp.png"
                    alt=""
                    className="whatsapp-button"
                  />
                </a>
              </div>

              <div>
                <Link to="/contact">
                  <button className="contact-button">Contact us</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DriverCards;
