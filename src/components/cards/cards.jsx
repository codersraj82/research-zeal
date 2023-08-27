import React from "react";
import "./cards.css";
import "./cardData";

const Cards = ({ cardData }) => {
  console.log(cardData);

  return (
    // <div className="card">
    //   <div className="card-body">
    //     <h5 className="card-title">{cardData[0].title}</h5>
    //     <img src={cardData[0].img} alt="" /> <br />
    //     <p className="card-description">{cardData[0].description}</p>
    //   </div>
    //   <button className="card-button"> Contact us</button>
    // </div>
    <>
      {cardData.map((card, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <img src={card.img} alt="" className="car-image" />
              <h5 className="card-title">{card.title}</h5>
              <div className="profile-container">
                <img src={card.profile} alt="" className="profile-photo" />
                <div>
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

              <p className="card-description">{card.description}</p>
            </div>
            <button className="card-button"> Contact us</button>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
