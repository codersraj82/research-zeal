import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="map-container">
      <div>
        <h1>Address:</h1>
        <p>
          Vivekanand nagar,
          <br />
          A/P: Wakhari <br />
          Tal: Pandharpur <br />
          Dist: Solapur <br />
          PIN: 413304
        </p>
      </div>
      <div>
        <h2>Contact Details:</h2> <br />
        WhatsApp Number: 9423857070 <br /> Contact Number: 9665575739 <br />
        <email>researchzeal23@gmail.com</email>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15205.315542503105!2d75.298961!3d17.681917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc417afbfb7d4f3%3A0xc78ad3363857885b!2zUmVudGFsIGNhciBQYW5kaGFycHVyLCBTb2xhcHVyLCBQdW5lLCBNdW1iYWksIEtvbGhhcHVyIGFuZCBhbGwgTWFoYXJhc2h0cmEgc3RhdGUgYnkgUmVzZWFyY2haZWFsLCDgpK3gpL7gpKHgpYvgpKTgpY3gpLDgpYAg4KSV4KS-4KSwIOCkquCkguCkouCksOCkquClguCksA!5e0!3m2!1sen!2sin!4v1692805304022!5m2!1sen!2sin"></iframe>
      </div>
    </div>
  );
};

export default Contact;
