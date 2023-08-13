import React from "react";
import './ccard.css'

const Ccard = () => {

  return (
    <div className="container">
      <div className="card">
        <img src="image1.jpg" alt="Card 1"/>
        <div className="card-content">
          <h3>Card 1 Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet!</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img src="" alt="Card 2"/>
        <div className="card-content">
          <h3>Card 2 Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet!</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img src="image3.jpg" alt="Card 3"/>
        <div className="card-content">
          <h3>Card 3 Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet!</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Ccard;
