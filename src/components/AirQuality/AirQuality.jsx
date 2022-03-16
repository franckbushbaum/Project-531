import React from 'react';
import './AirQuality.css';


function AirQuality(props) {

console.log('props:', props)

const {newProps} = props

console.log('newProps is', newProps)

  return (
    <>
    <div className="air-quality-box">
      <div>
        <p>TODAY'S AIR QUALITY REPORT</p>
      </div>
    </div> 

  </>
  );
}

export default AirQuality;