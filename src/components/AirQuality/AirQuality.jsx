import React from 'react';
import './AirQuality.css';

import { BsFillCloudDrizzleFill, BsFillBrightnessHighFill } from "react-icons/bs";

import moment from 'moment';


function AirQuality({ data }) {

  //1 destructured was im an object. 

  console.log('destructured data?', data);



  return (
    <>
      <div className="hours">
        <div>
          <div className="modal-title">TODAY'S AIR QUALITY REPORT</div>
          <ul>
            {data.map((hour) => {
              //2  Air Quality Index [US - EPA standard 0 - +500]
              return <li><span className="first-span">
              <BsFillCloudDrizzleFill />  On {(moment(hour.timestamp_local).format('MMM Do YY'))} <BsFillBrightnessHighFill /><br />
                                        WE HAD: <br />  
                                        Air Quality Index : {hour.aqi} <br /> 
                                        pm10: concentration of particulate matter smaller than 10 microns : {hour.pm10}.<br />
                                        pm25: concentration of particulate matter small than 25 micros: {hour.pm25}.<br />
                                        03: Trioxygen, the layer of ozone protecting the Earth from harmful rays.<br />
                                        NO2: More dangerous than Carbion Dioxide for the environment? 300% more potent.<br />
                                        CO: Carbon Monoxodie.{hour.co}  
              </span></li>
            })}
          </ul>
        </div>
      </div>

    </>
  );
}

export default AirQuality;