import React from 'react';
import "./card.css"

// This a blueprint for a card used as a pretty containder to logically seperate different data points
function Card({heading}){
  return (
    <div class="card-container">
      <div class="heading-container">
        <em>{heading}</em>
      </div>
      <div class="components-container">

      </div>
    </div>
  )

}

export default Card
