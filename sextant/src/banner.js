import React from 'react';
import "./banner.css"

// This a blueprint for a card used as a pretty containder to logically seperate different data points
function Banner({heading}){
  return (
    <h1 class="Heading-banner">{heading}</h1>
  )

}

export default Banner
