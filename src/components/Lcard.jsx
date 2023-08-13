import React from 'react'
import './Lcard.css'


const Lcard = () => {
  return (
    <div className="sec">

    <div className="landscape-card">
    <img src='../../public/hands_shake.jpg' alt="Landscape" className="landscape-image" />
    <div className="landscape-details">
      <h2 className="landscape-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, nam.</h2>
      <p className="landscape-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt obcaecati nemo earum, a nam!</p>
      <button className="landscape-button">View Details</button>
    </div>
  </div>
    <div className="landscape-card2">
    <div className="landscape-details">
      <h2 className="landscape-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, porro.</h2>
      <p className="landscape-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio repellat ratione culpa dolorem veniam quam. Perferendis, ducimus voluptas. Vero?</p>
      <button className="landscape-button">View Details</button>
    </div>
    <img src='../../public/hands_shake.jpg' alt="Landscape" className="landscape-image" />
  </div>
    
    </div>
  )
}

export default Lcard