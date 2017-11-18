import React, { Component } from 'react';
import miles from '../assets/images/miles.png'


const hello = () => {
  return (
    <div className="container">
      <h2>Smooth</h2>

      <div className="image-wrapper">
        <img src={miles} />
      </div>
    </div>
  )
}

export default hello;
