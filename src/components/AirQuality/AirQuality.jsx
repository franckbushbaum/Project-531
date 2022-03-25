import React from 'react';
import './AirQuality.css';
//import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";

import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";


function AirQuality({ data }) {

  //1 destructured was im an object. 

  console.log('destructured data?', data);



  return (
    <>
      <div className="hours">
        <div>
          <p>TODAY'S AIR QUALITY REPORT</p>
          <ul>
            {data.map((hour) => {
              //2  Air Quality Index [US - EPA standard 0 - +500]
              return <li><span className="first-span">
              <BsFillCloudDrizzleFill />  On {hour.timestamp_local} we had:{hour.aqi} aqi. < BsFillBrightnessHighFill />
              </span></li>
            })}
          </ul>
        </div>
      </div>

    </>
  );
}

export default AirQuality;