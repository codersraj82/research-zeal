import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import carphoto from "../../CarouselFlod/images/carphoto.jpg";
import "./vehiclecard.css";

function HondaBrv() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={carphoto} />
      <Card.Body>
        <Card.Title>Honda BR-V</Card.Title>
        <Card.Text>
          Thank you for choosing us for your travels! We hope you have a
          fantastic journey and a wonderful experience. Safe travels!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Car Rent:</ListGroup.Item>
        <ListGroup.Item>
          For journey greater than 200Kms rate is 12Rs/Km
        </ListGroup.Item>
        <ListGroup.Item>
          For journey less than 200Kms and 8 hr rate is 2500Rs per day{" "}
        </ListGroup.Item>
        <ListGroup.Item>
          Toll, state tax, parking, night charges 500, customer need pay extra
          to rent
        </ListGroup.Item>
        <ListGroup.Item>
          The all rate are Disel⛽ included and little bit negotiable.{" "}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Contact Us</Card.Link>
        <Card.Link href="#">More info</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default HondaBrv;
