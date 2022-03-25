import React from 'react';
import './AirQuality.css';


function AirQuality(props) {

console.log('props:', props)

const newProps = props

console.log('newProps is', newProps)

  return (
    <>
    <div className="no">
      <div>
        <p>TODAY'S AIR QUALITY REPORT</p>
        <ul>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
          <li>3234..3233</li>
        </ul>
      </div>
    </div> 

  </>
  );
}

export default AirQuality;