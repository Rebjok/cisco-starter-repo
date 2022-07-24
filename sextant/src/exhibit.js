import React from 'react';
import "./exhibit.css"

// This a blueprint for a card used as a pretty containder to logically seperate different data points
function Card({heading, children}){
  return (
    <div className="card-container">
      <div class="heading-container">
        <em>{heading}</em>
      </div>
      <div class="components-container">
        {children}
      </div>
    </div>
  )

}

export default Card
